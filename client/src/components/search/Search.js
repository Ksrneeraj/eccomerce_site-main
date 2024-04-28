import React, { useState,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";
import { NumberContext } from "../contextProvider/CustomContextProvider";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const {numberArray,addNumber}=useContext(NumberContext);


  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/productListWomen?page=1&limit=100&search=${searchValue}`
      );
      let Data = response.data.documents;
      setSearchResults(response.data.documents);
      console.log(response.data.documents);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   console.log(numberArray);
  // }, [numberArray]);


  // below is productlist
  // let [customs, setCustoms] = useState([]);
  let navigate = useNavigate();
  const [isFilled, setIsFilled] = useState(false);

  const btnfill = () => {
    setIsFilled(!isFilled);
  };
  // useEffect(() => {
  //   getData();
  // }, []);

  // let getData = async () => {
  //   try {
  //     const res = await fetch("/productListWomen");
  //     const data = await res.json();
  //     const plainObject = JSON.parse(JSON.stringify(data.documents));
  //     setCustoms(plainObject);
  //   } catch (err) {
  //     console.log("error in ProductList", err);
  //   }
  // };
  const handleClick = (productId) => {
    console.log(productId);
    navigate(`/pd/${productId}`);
  };
  // useEffect(() => {

  //   handleSearch();
  // }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="container">
        <Navbar></Navbar>
        <div className="d-flex justify-content-between">
          <h2 className="mx-5">FILTER</h2>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                SortBy
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  from Low to High
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  from High to Low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row cols-md-3 row-cols-lg-5 row-cols-xl-5 justify-content-evenly my-3">
          {/* 1st card */}

          {searchResults.map((custom) => (
            <div
              className="col card border border-dark border-2"
              style={{ width: "", backgroundColor: "" }}
              key={custom.id}
              onClick={() => handleClick(custom._id)}
            >
              <hr style={{ color: "white" }} />
              <img
                className="border border-dark border-2"
                src={custom.image}
                alt="..."
              ></img>
              <hr style={{ color: "white" }} />
              <div
                className="card-body text-dark border border-dark mx-3"
                style={{ backgroundColor: "ButtonFace", borderRadius: "15px" }}
              >
                <p className="card-text ">{custom.title}</p>
                <p className="lead card-text text-muted">
                  {custom.description}{" "}
                </p>
                <div className="conatiner d-flex" onClick={btnfill}>
                  {/* {isFilled ? <AiFillHeart></AiFillHeart> : <AiOutlineHeart></AiOutlineHeart>} */}
                  <p className="card-text" style={{ fontFamily: "cursive" }}>
                    <BsCurrencyRupee />
                    {custom.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
