console.log("hii");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors=require("cors");
connectDb();

const User = require("./models/contactSchema");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/contacts",require("./routes/paymentRoute"))

app.use("/productListWomen",require("./routes/productlist_women"))
app.use("/productListMen",require("./routes/productlist_men"))
app.use("/productListKids",require("./routes/productlist_kids"))
app.use("/cart",require("./routes/cart"))
app.use("/wishlist",require("./routes/wishlist"))
app.use(errorHandler);

const stripe=require("stripe")(process.env.STATUS_PRIVATE_KEY)
const storeItems=new Map([
  [1,{price:1000,name:"pot"}],
  [2,{price:2500,name:"plant"}]
])

app.listen(port, () => {
  console.log("server running in port", port);
});
