import React, { useState, useEffect } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Navbar from "../navbar/Navbar"
import "./Productlist.css";

function Productlist() {
  const [customs, setCustoms] = useState([]);
  const [asc, setAsc] = useState(false);
  const [dsc, setDsc] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [asc, dsc]);

  const getData = async () => {
    try {
      let res;
      if (asc === true) {
        res = await fetch("/productListWomen?sort=price");
      } else if (dsc === true) {
        res = await fetch("/productListWomen?sort=price,desc");
      } else {
        res = await fetch("/productListWomen");
      }

      const data = await res.json();
      const plainObject = JSON.parse(JSON.stringify(data.documents));
      setCustoms(plainObject);
    } catch (err) {
      console.log("error in ProductList", err);
    }
  };

  const handleClick = (productId) => {
    navigate(`/pd/${productId}`);
  };

  const btnfill = () => {
    setIsFilled(!isFilled);
  };

  let setToFalse=()=>{
    setAsc(false);
    setDsc(false);
  }

  return (
    <div className="container">
    <Navbar />
    <div className="row justify-content-between align-items-center">
      <div className="col-6">
        <h2 className="mx-5">FILTER</h2>
      </div>
      <div className="col-6 text-end">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setAsc(true)}>
              from Low to High
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDsc(true)}>
              from High to Low
            </Dropdown.Item>
            <Dropdown.Item onClick={setToFalse}>Popular</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 justify-content-center my-3">
        {customs.map((custom) => (
          <div
            className="col card border border-2 product-card mx-2 my-2 "
            key={custom.id}
            onClick={() => handleClick(custom._id)}
          >
            <div className="card-img-container">
              <img className="card-img-top" src={custom.image} alt={custom.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{custom.title}</h5>
              <p className="card-text text-muted">{custom.description}</p>
              <div className="card-footer">
                <div className="heart-icon" onClick={btnfill}>
                  {isFilled ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
                <p className="card-price">
                  <BsCurrencyRupee />
                  {custom.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productlist;
