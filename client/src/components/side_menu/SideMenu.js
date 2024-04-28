import React, { useState } from "react";
import { FaHome, FaFire,FaPlayCircle, FaHistory, FaClock, FaThumbsUp, FaChevronDown } from "react-icons/fa";
import {BsClipboard2Heart} from "react-icons/bs";
import "./SideMenu.css"; // Import the CSS file for the side menu styles
import Navbar from "../navbar/Navbar";
import Order from "../myorders/MyOrders";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const [activeItem, setActiveItem] = useState("viewProfile");
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(item.toLowerCase());
  };

  return (
    <div className="side-menu-container">
      <div className="side-menu">
        <ul className="menu-items">
          <li
            className={`menu-item ${activeItem === "" ? "active" : ""}`}
            onClick={() => handleItemClick("")}
          >
            <FaHome className="menu-icon" />
            <span className="menu-text">View Profile</span>
          </li>
          <li
            className={`menu-item ${activeItem === "myOrders" ? "active" : ""}`}
            onClick={() => handleItemClick("myOrders")}
          >
            <FaFire className="menu-icon" />
            <span className="menu-text">My Orders</span>
          </li>
         
          <li
            className={`menu-item ${activeItem === "wishlist" ? "active" : ""}`}
            onClick={() => handleItemClick("wishlist")}
          >
            <BsClipboard2Heart className="menu-icon" />
            <span className="menu-text">Favorites</span>
          </li>
          <li
            className={`menu-item ${activeItem === "helpCenter" ? "active" : ""}`}
            onClick={() => handleItemClick("helpCenter")}
          >
            <FaHistory className="menu-icon" />
            <span className="menu-text">Help Center</span>
          </li>
          <li
            className={`menu-item ${activeItem === "faqs" ? "active" : ""}`}
            onClick={() => handleItemClick("faqs")}
          >
            <FaClock className="menu-icon" />
            <span className="menu-text">FAQs</span>
          </li>
          <li
            className={`menu-item ${activeItem === "privacyPolicy" ? "active" : ""}`}
            onClick={() => handleItemClick("privacyPolicy")}
          >
            <FaThumbsUp className="menu-icon" />
            <span className="menu-text">Privacy Policy</span>
          </li>
          <li
            className={`menu-item ${activeItem === "aboutUs" ? "active" : ""}`}
            onClick={() => handleItemClick("aboutUs")}
          >
            <FaChevronDown className="menu-icon" />
            <span className="menu-text">About Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
