import React, { useState, useEffect } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate,useLocation } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import "./WishList.css"

function WishList() {
  const location = useLocation();
  const { pathname, search } = location;
  const [nav,setNav]=useState(true);
  const [customs, setCustoms] = useState([]);
  const navigate = useNavigate();
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/user/wishlist") {
      setNav(false);
    }
  }, [pathname]);
  useEffect(() => {
    getData();
  }, []);
  let getData = () => {
    axios
      .get("http://localhost:5000/wishlist")
      .then((res) => {
        const data = res.data;
        // const plainObject = JSON.parse(JSON.stringify(data.documents));
        setCustoms(data);
        // console.log(plainObject);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (productId) => {
    console.log("iam here")
    navigate(`/pd/${productId}`);
  };
  


  return (
    <div className="container">
      {
        nav?<Navbar />:<div></div>
      }
    
    
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 justify-content-center my-3">
        {customs.map((custom) => (
          <div
            className="col card border border-2 product-card mx-2 my-2 "
            key={custom.id}
            onClick={() => handleClick(custom.custom_id)}
          >
            <div className="card-img-container">
              <img className="card-img-top" src={custom.image} alt={custom.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{custom.title}</h5>
              <p className="card-text text-muted">{custom.description}</p>
              <div className="card-footer">
                {/* <div className="heart-icon" onClick={btnfill}>
                  {isFilled ? <AiFillHeart /> : <AiOutlineHeart />}
                </div> */}
                
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
  )
}

export default WishList