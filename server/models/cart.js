const mongoose = require("mongoose");

const cart = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

const cart_schema = mongoose.model(
  "CART",
  cart
);
module.exports = cart_schema;
