import React, { useState, useEffect } from "react";
import Star from "./Star";
import "boxicons";
import "./popular.scss";
import img1 from "../assets/food-1.png";
import img2 from "../assets/food-2.png";
import img3 from "../assets/food-3.png";
import img4 from "../assets/food-4.png";
import img5 from "../assets/food-5.png";
import img6 from "../assets/food-6.png";
import img7 from "../assets/food-7.png";
import img8 from "../assets/food-8.png";
import Notification from "../notification/Notification";

const data = [
  {
    id: "food-1",
    img: img1,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-2",
    img: img2,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-3",
    img: img3,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-4",
    img: img4,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-5",
    img: img5,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-6",
    img: img6,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-7",
    img: img7,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
  {
    id: "food-8",
    img: img8,
    name: "delicious food",
    price: "$50.00",
    sale: "$40.00",
    count: 1,
  },
];
function initStorage() {
  localStorage.click = 0;
  localStorage.newItem = null;
  localStorage.itemsArray = null;
}
function addCart(e) {
  localStorage.click = Number(localStorage.click) + 1;
  var oldItems = JSON.parse(localStorage.itemsArray)||[];
  var index = e.target.value;
  function check(value) {
    if (value) {
      return value.id === data[index].id;
    }
    return false;
  }
  
  if (oldItems.find(check)) {
    oldItems.find(check).count += 1;
  } else {
    oldItems.push(data[index]);
  }

  localStorage.setItem("newItem", JSON.stringify(data[index]));
  localStorage.setItem("itemsArray", JSON.stringify(oldItems));

  document.getElementById("badge").innerHTML = localStorage.click;
  document.getElementById("notification").classList.add("active");
  setTimeout(function () {
    document.getElementById("notification").classList.remove("active");
  }, 2000);
}

function Popular() {
  
  useEffect(() => {
    if(localStorage.click === undefined){
      initStorage()
    }
    // console.log("itemarr", localStorage.itemsArray)
    document.getElementById("badge").innerHTML = localStorage.click;
  }, []);
  return (
    <>
      <div className="popular" id="popular">
        <span>popular food</span>
        <h3>our special dishes</h3>
        <div className="popular-list">
          {data.map((item, i) => (
            <div className="popular-list-item">
              <div className="popular-list-item-heart">
                <i class="bx bxs-heart"></i>
              </div>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className="popular-list-item-star">
                <Star />
              </div>
              <div className="popular-list-item-cost">
                <h3>{item.price}</h3>
                <h4>{item.sale}</h4>
              </div>
              <button onClick={(e) => addCart(e)} value={i}>
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Notification />
    </>
  );
}

export default Popular;
