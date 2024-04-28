import "./Navbar.css"
import React from 'react'
import axios from "axios"
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import { MdMonitorHeart } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FaLightbulb, FaUserPlus } from "react-icons/fa";
import img from "./dan-cristian-padure-mIyZDPhuyY0-unsplash.jpg"
import { useState,useEffect } from "react";

import {AiFillHeart} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SearchBar from "../search/Search";
function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  let navigate=useNavigate();
  
  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/productListWomen', {
  //       params: {
  //         page: 1,
  //         limit: 100,
  //         search: searchValue
  //       }
  //     });
  //     setSearchResults(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSearch=()=>{
    if (searchValue!==""){
      navigate(`/searchresults/${searchValue}`);
    }
    
  }


  let gotoHome=()=>{
    navigate("/")
  }

  
  let tocart=()=>{
    navigate("/cart")
  }

  let toUser=()=>{
    navigate("/user")
  }
  let toWishList=()=>{
    navigate("/wishlist")
  }
  return (
    <div>
          <div className="image-container">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={img} alt="Logo" className="logo" />
            </a>

            <a class="navbar-brand" href="#" onClick={gotoHome}>
              FASHION
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <form class="d-flex rightpart" role="search">
              <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      /> 
       {/* <button onClick={handleSearch}>Search</button>  */}
      {/* <SearchBar></SearchBar> */}

     
    </div>
                <BiSearchAlt onClick={handleSearch} className="sicon"></BiSearchAlt>
                <BiFilterAlt className="sicon"></BiFilterAlt>
                <AiFillHeart className="sicon" onClick={toWishList}></AiFillHeart>
                <HiShoppingCart onClick={tocart} className="sicon"></HiShoppingCart>
              
                <FaUserPlus  onClick={toUser}className="sicon"></FaUserPlus>
              </form>
            </div>
          </div>
        </nav>
       
      </div>
    </div>
  )
}

export default Navbar