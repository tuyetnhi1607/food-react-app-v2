import React from 'react'
import './order.scss'
import img1 from '../assets/icon-1.png'
import img2 from '../assets/icon-2.png'
import img3 from '../assets/icon-3.png'


function Order() {
  return (
    <div className="order">
      <span>our menu</span>
      <h3>out top dishes</h3>
      <div className="order-card">
        <div className="order-card-item">
          <img src={img1} alt="" />
          <h1>7:00am To 10:30pm</h1>
        </div>
        <div className="order-card-item">
          <img src={img2} alt="" />
          <h1>+123-456-7890</h1>
        </div>
        <div className="order-card-item">
          <img src={img3} alt="" />
          <h1>hanoi, vietnam</h1>
        </div>
      </div>
    </div>
  );
}

export default Order
