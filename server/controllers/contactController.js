const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactSchema");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(422).json({ error : "please fill"})
  }
  try{
    const userExist=await Contact.findOne({email:email});
      if(userExist){
      return res.status(422).json({ error : "email already exists"});
    }
    const user=new Contact({name, email, phone});
    await user.save();
    res.status(201).json({message:"user registered"});
  }catch(err){
    console.log(err)
  }

});


//@desc Get contact
//@route GET /api/contacts/
//@access private
//@desc Get contact
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id; // Assuming the contact ID is passed as a route parameter

  try {
    let contacts;
    if (contactId) {
      const contact = await Contact.findById(contactId);
      if (!contact) {
        return res.status(404).json({
          title: "Not Found",
          message: "Contact not found",
          stackTrace: "Error: Contact not found\n    at ..."
        });
      }
      contacts = [contact];
    } else {
      contacts = await Contact.find();
      if (contacts.length === 0) {
        return res.status(404).json({
          title: "Not Found",
          message: "No contacts found",
          stackTrace: "Error: No contacts found\n    at ..."
        });
      }
    }
  
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

  
//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
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
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};