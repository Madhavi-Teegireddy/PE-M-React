import React from "react";
import { FaSun, FaMoon, FaUserCheck, FaHeart } from "react-icons/fa";


export default function Product(props) {
  return (
    <div className="card">
    <div className="card1">@GHARLIERA<FaHeart color="red"></FaHeart></div>
      <img className="product--image" src={props.url} alt="product image" />
      <h2> {props.name}</h2>
      <h2 style={{fontWeight:"bold"}}>Way Back Home</h2>
      <div className="card2">
      <p className="price">current bid<br/>{props.price}</p>
      <p className="price1">{props.description}</p>
      </div>
    </div>
  );
}