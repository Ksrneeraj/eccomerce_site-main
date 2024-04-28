const mongoose = require("mongoose");

const productlist_women = mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
     
    },
    price: {
      type: Number,
      require: true,
    },
    discount: {
      type: String,
    },
    color: {
      type: [String],
      require: true,
    },
    size: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    gender:{
      type:String,
      require:true,
    },
    query:{
      type:String,
      require:true
    }
  },
  {
    timestamps: true,
  }
);

const productlist_women_schema = mongoose.model(
  "PR_LIST_WOMEN",
  productlist_women
);
module.exports = productlist_women_schema;
