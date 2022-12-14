import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log(`added to wish list`)
    }

    const addToCompare = (e) => {
        console.log("added to compare")
    }

    const addToKart = (e) => {
        console.log("added to shopping kart")
    }


  return (
    <div className="col">
      <div className="card">
        <div className="card-img">
          <img src= {product.img} alt={product.name} />
          <div className="card-menu d-xl-none">
            <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
            <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
            <button onClick={addToKart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <Link to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
            <span className="corner-left"></span>
            QUICK VIEW
            <span className="corner-right"></span>
          </Link>
        </div>
        <div className="card-body">
          <p className="card-Category">{product.category}</p>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-rating">
          <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <p className="card-price">{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
