import React from "react";
import { FaSun, FaMoon, FaUserCheck, FaHeart } from "react-icons/fa";


export default function TopS(props) {
  return (
    <div className="card">
      <img className="product--im" src={props.url} alt="product image" />
      <h2> {props.name}</h2>
      <p className="price">current bid<br/>{props.price}</p>
    </div>
  );
}