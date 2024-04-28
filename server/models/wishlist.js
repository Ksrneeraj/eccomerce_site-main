const mongoose = require("mongoose");

const wishlist = mongoose.Schema(
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
    },
    custom_id:{
      type:String,
      require:true
    }
  },
  {
    timestamps: true,
  }
);

const wishlist_schema = mongoose.model(
  "WISHLIST",
  wishlist
);
module.exports = wishlist_schema;
