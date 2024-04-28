import React from "react";
import "./Cart.css";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
function Cart() {
  let [customs, setCustoms] = useState([]);
  let [removed,setRemoved]=useState(false);
  let nav=useNavigate();
  useEffect(() => {
    getData();
  }, [removed]);

  let getData = () => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        const data = res.data;
        const plainObject = JSON.parse(JSON.stringify(data.documents));
        setCustoms(plainObject);
        console.log(plainObject);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let count = customs.length;
  let cost = 0;
  for (let i = 0; i < count; i++) {
    cost += customs[i].price;
  }

  let removeProduct=(id)=>{
    
   
    console.log(id)
    axios.delete(`http://localhost:5000/cart/${id}`)
    .then((res)=>{
      console.log("deleted from cart")
      setRemoved(!removed)
    })
    .catch((err)=>{
      console.log(err);
    })
    }
let gotoHome=()=>{
    nav("/pr")
}
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ backgroundColor: "#d2c9ff" }}>
        <section className="h-100 h-custom">
          <div className="container py-5 h-100 ">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>
                            <h6 className="mb-0 text-muted">{count} items</h6>
                          </div>
                          <hr className="my-4" />

                          {customs.map((custom, index) => (
                            <div
                              className="row mb-4 d-flex justify-content-between align-items-center"
                              key={custom.id}
                            >
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={custom.image}
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>

                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{custom.title}</h6>
                                <h6 className="text-black mb-0">
                                  {custom.category}
                                </h6>
                              </div>

                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                                <button
                                  className="btn btn-link px-2"
                                  // onClick={() => decreaseQuantity(index)}
                                > 
                                  <AiOutlineMinusCircle onClick={()=>removeProduct(custom._id)}></AiOutlineMinusCircle>
                                 </button>

                                {/* <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={custom.quantity}
                                  type="number"
                                  className="form-control form-control-sm"
                                  readOnly
                                /> */}

                                {/* <button
                                  className="btn btn-link px-2"
                                  onClick={() => increaseQuantity(index)}
                                >
                                  <i className="fas fa-plus"></i>
                                </button> */}
                              </div>

                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-3">
                                <h6 className="mb-0">{custom.price}</h6>
                              </div>

                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted">
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          ))}

                          <hr className="my-4" />

                          <div className="pt-5">
                            <h6 className="mb-0">
                              <a href="#!" className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2" onClick={gotoHome}></i>
                                Back to shop
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">items {count}</h5>
                            <h5>₹ {cost}</h5>
                          </div>

                          <h5 className="text-uppercase mb-3">Shipping</h5>

                          <div className="mb-4 pb-2">
                            <select className="select">
                              <option value="1">
                                Standard-Delivery- ₹100.00
                              </option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                            </select>
                          </div>

                          <h5 className="text-uppercase mb-3">Give code</h5>

                          <div className="mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Examplea2"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Examplea2"
                              >
                                Enter your code
                              </label>
                            </div>
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5">
                            <h5 className="text-uppercase">Total price</h5>
                            <h5>₹ {cost + 100}</h5>
                          </div>

                          <button
                            type="button"
                            className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cart;
