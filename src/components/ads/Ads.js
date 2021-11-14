import React from "react";
import "./ads.scss";
import img1 from "../assets/banner-1.png";
import img2 from "../assets/banner-2.png";
import img3 from "../assets/banner-3.png";

function Ads() {
  return (
    <div className="ads">
      <div className="ads-main">
        <div className="ads-main-content">
          <span>Double Cheese</span>
          <h2>BURGER</h2>
          <h4>With Cococola And Fries</h4>
          <button>order now</button>
        </div>
      </div>
      <div className="ads-extra">
        <div className="ads-extra-item">
          <div className="ads-extra-item-content">
            <h4>Special Offer</h4>
            <h3>Upto 50% Off</h3>
            <button>order now</button>
          </div>
        </div>
        <div className="ads-extra-item">
          <div className="ads-extra-item-content">
            <h4>Special Offer</h4>
            <h3>Upto 50% Off</h3>
            <button>order now</button>
          </div>
        </div>
        <div className="ads-extra-item">
          <div className="ads-extra-item-content">
            <h4>Special Offer</h4>
            <h3>Upto 50% Off</h3>
            <button>order now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
