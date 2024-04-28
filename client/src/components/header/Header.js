import "./Header.css";
import React from "react";
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import { MdMonitorHeart } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { FaLightbulb, FaUserPlus } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import img from "./dan-cristian-padure-mIyZDPhuyY0-unsplash.jpg";
import { MdExplore } from "react-icons/md";
import { Carousel } from "react-bootstrap";
import planterimg from "../../images/planter.jpg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsChatRightDots } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import toolsimg from "../../images/tools.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/im";
import { FaChild, FaExchangeAlt } from "react-icons/fa";
import menimg from "../../images/men_fashion.jpg";
import womenimg from "../../images/women_fashion.jpg";
import kidsimg from "../../images/kids_fashion.jpg";
import Footer from "../footer/Footer";

function Header() {
  let navigate = useNavigate();

  let categ_seeds = () => {
    navigate("/categ_seeds");
  };

  let tocart = () => {
    navigate("/cart");
  };

  let [customs, setCustoms] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setCustoms(data);
    } catch (err) {
      console.log("error in getting data", err);
    }
  };
  const imageStyle = {
    objectFit: 'contain',
    
   
maxHeight: '100%', 
    width: '100%',
  };

  return (
    <div>
      <div className="image-container">
   
        <Navbar></Navbar>
        <div>
        
        </div>

        <div className="header-content">
          <h1 className="text">NEW FASHION IS HERE</h1>
          <BsChevronDoubleDown
            style={{ color: "white", fontSize: "30" }}
            className="test"
          />
        </div>
      </div>

      <div style={{ display: "flex", marginLeft: "110px", marginTop: "20px" }}>
        <h2 style={{ fontSize: "42px" }}>Explore</h2>
        <MdExplore
          style={{ marginTop: "10px", marginLeft: "3px" }}
          className="sicon"
        ></MdExplore>
      </div>

      <div style={{ display: "flex", marginLeft: "110px", marginTop: "20px" }}>
        

        <Card
          className="horizontal-card"
          style={{ width: "400px", marginRight: "25px" }}
        >
          <div className="d-flex">
            <div className="img-container">
              <img src={menimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Men</Card.Title>
                <IoIosMan
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "366207",
                  }}
                ></IoIosMan>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button
                style={{ backgroundColor: "black" }}
                onClick={categ_seeds}
              >
                Shop Now
              </Button>
            </Card.Body>
          </div>
        </Card>


        <Card
          className="horizontal-card"
          style={{ width: "400px", marginRight: "25px" }}
        >
          <div className="d-flex">
            <div className="img-container">
              <img src={womenimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Women</Card.Title>
                <ImWoman
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "5D1E1E",
                  }}
                ></ImWoman>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button style={{ backgroundColor: "black" }}>Shop Now</Button>
            </Card.Body>
          </div>
        </Card>
        <Card
          className="horizontal-card"
          style={{ width: "400px", marginRight: "25px" }}
        >
          <div className="d-flex">
            <div className="img-container">
              <img src={kidsimg} alt="Profile" className="cir-image" />
            </div>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title>Kids</Card.Title>
                <FaChild
                  style={{
                    marginLeft: "10px",
                    marginTop: "3px",
                    color: "515151",
                  }}
                ></FaChild>
              </div>

              <Card.Text>Quote</Card.Text>
              <Button style={{ backgroundColor: "black" }}>Shop Now</Button>
            </Card.Body>
          </div>
        </Card>
      </div>
      <hr />
      {/* new 24/7 tag */}
      <div
        className="d-flex justify-content-evenly border border-dark"
        style={{ backgroundColor: "ButtonShadow" }}
      >
        <div className="text-center">
          <CiDeliveryTruck style={{ fontSize: "180px" }} />
          <p style={{ fontFamily: "fantasy" }}>Free delivery</p>
        </div>
        <div className="text-center py-4">
          <BsChatRightDots style={{ fontSize: "140px" }} />
          <p style={{ fontFamily: "fantasy" }}>24/7 Free chat</p>
        </div>
        <div className="text-center py-2">
          <BsCreditCard2Back style={{ fontSize: "150px" }} />
          <p style={{ fontFamily: "fantasy" }}>Secured Payment</p>
        </div>
        <div className="text-center py-4">
          <FaExchangeAlt style={{ fontSize: "130px" }} />
          <p style={{ fontFamily: "fantasy" }}>Free exchange & returns</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Header;
