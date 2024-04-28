import React, { useState } from 'react';
import './Productdetails.css';
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Loading from '../loading/Loading';
const Productdetails = () => {
  // const [k,setk]=useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isFavorited, setIsFavorited] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

 
// below
const { id } = useParams();
const [customs, setCustoms] = useState([]);
const [product, setProduct] = useState(null);
const [img, setImg] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const getData = async () => {
    try {
      const res = await fetch(`/productListWomen/${id}`);
      const data = await res.json();
      setCustoms(data);
      setImg(data.length > 0 ? data[0].image : null);
      setIsLoading(false);
      // console.log(data)
    } catch (err) {
      console.log("Error in ProductList", err);
    }
  };
 

  getData();
}, [id]);

useEffect(() => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  if (favorites && favorites.length > 0) {
    const favoriteIds = favorites.map((favorite) => favorite.custom_id);
    setIsFavorited(favoriteIds.includes(customs[0]?._id));
  }
}, [customs]);

const data = {
  custom_id:customs[0]?._id,
  image: customs[0]?.image,
  title: customs[0]?.title,
  price: customs[0]?.price,
  color: customs[0]?.color,
  size: customs[0]?.size,
  category: customs[0]?.category,
};

const addToCart = async () => {
  axios
    .post("http://localhost:5000/cart", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};


const handleToggleFavorite = () => {
  const data = {
    custom_id: customs[0]?._id,
    image: customs[0]?.image,
    title: customs[0]?.title,
    price: customs[0]?.price,
    color: customs[0]?.color,
    size: customs[0]?.size,
    category: customs[0]?.category,
  };

  if (!isFavorited) {
    axios.post("http://localhost:5000/wishlist", data)
      .then((response) => {
        setIsFavorited(true);
        console.log(response.data);
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('favorites', JSON.stringify([...favorites, data]));
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    if (customs.length > 0) {
      const wishlistItemId = customs[0]._id;
      axios.delete(`http://localhost:5000/wishlist?key=${wishlistItemId}`)
        .then((res) => {
          console.log("Removed from favorites");
          setIsFavorited(false);
          const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          const updatedFavorites = favorites.filter((favorite) => favorite.custom_id !== wishlistItemId);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        })
        .catch((err) => {
          console.log("Error in removing from favorites");
        });
    }
  }
};



if (isLoading) {
  // return <div><Loading></Loading></div>;
  return <h1>Please wait</h1>;
}

let imgFunc=(img)=>{
  setImg(img);
}

  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-md-6">
          <div className="product-image">
            <img src={customs[0].image} alt="Product" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-info">
            <h2>{customs[0].title}</h2>
            <p className="price">{customs[0].price}</p>
            <p className="description">{customs[0].description}</p>
            <div className="size-selection">
              <h4>SIZE:  {customs[0].size}</h4>
              <div className="btn-group">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="color-selection">
              <h4>Choose Color:</h4>
              <div className="btn-group">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`btn ${selectedColor === color ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleColorChange(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="action-buttons">
            <button className={`btn ${isFavorited ? 'btn-favorite' : ''}`} onClick={handleToggleFavorite}>
              {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
              <button onClick={addToCart}className="btn btn-success add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <h3>Recommended Products</h3>
        <div className="product-scroll">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          <div className="product-card">Product 4</div>
          <div className="product-card">Product 5</div>
          <div className="product-card">Product 6</div>
          <div className="product-card">Product 7</div>
          <div className="product-card">Product 8</div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
