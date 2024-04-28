// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { BsCurrencyRupee } from "react-icons/bs";
// import Dropdown from "react-bootstrap/Dropdown";
// import Navbar from "../navbar/Navbar";
// import { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./SearchResults.css"
// import axios from 'axios';
// function SearchResults() {
//   const {search}=useParams();
//   console.log(search)
//   let [customs, setCustoms] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   let navigate=useNavigate();
//   useEffect(() => {
//     handleSearch();
//   }, [search]);
//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/productListWomen?page=1&limit=100&search=${search}`
//       );
//       let Data = response.data.documents;
//       setSearchResults(response.data.documents);
//       console.log(response.data.documents);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleClick = (productId) => {
//     console.log(productId);
//     navigate(`/pd/${productId}`);
//   };


//   return (
//     <div>
//       <div className="container">
//       <Navbar></Navbar>
//       <div className="d-flex justify-content-between">
//         <h2 className="mx-5">FILTER</h2>
//         <div>
//           <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//               SortBy
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">from Low to High</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">from High to Low</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>
//       <div className="row row-cols-1 row-cols-sm-2 row cols-md-3 row-cols-lg-5 row-cols-xl-5 justify-content-evenly my-3">
//         {/* 1st card */}

//         {searchResults.map((custom) => (
//           <div
//             className="col card border border-dark border-2"
//             style={{ width: "", backgroundColor: "" }}
//             key={custom.id}
//             onClick={() => handleClick(custom._id)}
//           >
//             <hr style={{ color: "white" }} />
//             <img
//               className="border border-dark border-2"
//               src={custom.image}
//               alt="..."
//             ></img>
//             <hr style={{ color: "white" }} />
//             <div
//               className="card-body text-dark border border-dark mx-3"
//               style={{ backgroundColor: "ButtonFace", borderRadius: "15px" }}
//             >
//               <p className="card-text ">{custom.title}</p>
//               <p className="lead card-text text-muted">{custom.description} </p>
//               <div className="conatiner d-flex" >
//                 {/* {isFilled ? <AiFillHeart></AiFillHeart> : <AiOutlineHeart></AiOutlineHeart>} */}
//                 <p className="card-text" style={{ fontFamily: "cursive" }}>
//                   <BsCurrencyRupee />
//                   {custom.price}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default SearchResults
import React, { useState, useEffect } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate,useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Navbar from "../navbar/Navbar"
import "./SearchResults.css"

function SearchResults() {
  const {search}=useParams();
  const [customs, setCustoms] = useState([]);
  const [asc, setAsc] = useState(false);
  const [dsc, setDsc] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [asc, dsc,search]);

  const getData = async () => {
    try {
      let res;
      
      if (asc === true) {
        res = await fetch(`http://localhost:5000/productListWomen??page=1&limit=100&search=${search}&sort=price`);
      } else if (dsc === true) {
        res = await fetch(`http://localhost:5000/productListWomen??page=1&limit=100&search=${search}&sort=price`);
      } else {
        res = await fetch(`http://localhost:5000/productListWomen?page=1&limit=100&search=${search}`);
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

export default SearchResults;
