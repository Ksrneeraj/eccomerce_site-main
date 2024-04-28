const asyncHandler = require("express-async-handler");
const Contact = require("../models/wishlist");
const documents = require("../config/documents.json");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getLists = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createList = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const {
    image,
    title,
    description,
    price,
    discount,
    image2,
    image3,
    color,
    size,
    category,
    custom_id
  } = req.body;
  if (!image || !title || !price || !custom_id) {
    return res.status(422).json({ error: "please fill" });
  }
  try {
    const userExist = await Contact.findOne({ image: image });
    if (userExist) {
      return res.status(422).json({ error: "image already exists" });
    }
    const user = new Contact({
      image:image,
      title:title,
      description:description,
      price:price,
      discount:discount,
      image2:image2,
      image3:image3,
      color:color,
      size:size,
      category:category,
      custom_id:custom_id
    });
    await user.save();
    res.status(201).json({ message: "product registered" });
  } catch (err) {
    console.log(err);
  }
});

//@desc Get contact
//@route GET /api/contacts/
//@access private
//@desc Get contact
//@route GET /api/contacts/:id
//@access private

const getList = asyncHandler(async (req, res) => {
  
  const contactId = req.params.id; // Assuming the contact ID is passed as a route parameter
  const searchKey = req.query.key;

  try {
    if (searchKey) {
      const result = await Contact.find({custom_id:searchKey}).exec();
      if (result) {
        console.log('Element exists:', result);
        return res.json({ exists: true });
      } else {
        console.log('Element does not exist');
        return res.json({ exists: false });
      }
    }

    let contacts;
    if (contactId) {
      const contact = await Contact.findById(contactId).exec();
      if (!contact) {
        return res.status(404).json({
          title: 'Not Found',
          message: 'Contact not found',
          stackTrace: 'Error: Contact not found\n    at ...',
        });
      }
      contacts = [contact];
    } else {
      contacts = await Contact.find().exec();
      if (contacts.length === 0) {
        return res.status(404).json({
          title: 'Not Found',
          message: 'No contacts found',
          stackTrace: 'Error: No contacts found\n    at ...',
        });
      }
    }

    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

const filter = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "price";
    let color = req.query.color || "All";

    const colors = [
      "Black",
      "Blue",
      "Dark Blue",
      "White",
      "Red",
      "Purple",
      "Olive",
      "Gray",
      "Red/Black",
      "Green",
    ];

    color === "All"
      ? (color = [...colors])
      : (color = req.query.color.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }
    const documents = await Contact.find({
      title: { $regex: search, $options: "i" },
    })
      .where("color")
      .in([...color])
      .sort(sortBy);
    // .skip(page*limit)
    // .limit(limit);

    const total = await Contact.countDocuments({
      color: { $in: [...color] },
      title: { $regex: search, $options: "i" },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      colors: colors,
      documents,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateList = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteList = asyncHandler(async (req, res) => {
  console.log("here")
  const key=req.query.key;
  
  const contact = await Contact.find({custom_id:key});
  
  console.log("here")
  if (!contact) {
    return res.status(404).json({
      title: 'Not Found',
      message: 'Contact not found',
      stackTrace: 'Error: Contact not found\n    at ...',
    });
  }
  // if (contact.user_id.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("User don't have permission to update other user contacts");
  // }
  console.log("found")
  await Contact.deleteOne({ custom_id: key });
  
  res.status(200).json(contact);
});

// const insertDocuments=async()=>{
//   try{

//     const docs=await Contact.insertMany(documents);
//     return Promise.resolve(docs)
//   }catch(err){
//     return Promise.reject(err)
//   }
// };

// insertDocuments()
//   .then((docs)=>console.log(docs))
//   .catch((err)=>console.log(err))

module.exports = {
  getList,
  getLists,
  updateList,
  deleteList,
  createList,
  filter,
};
