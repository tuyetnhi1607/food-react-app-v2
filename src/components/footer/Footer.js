import React from "react";
import "./footer.scss";
import "boxicons";

const menu = ["pizza", "burger", "chicken", "pasta", "and more"];
const link = ["home", "about", "popular", "menu", "order", "blogs"];
const extra = [
  "my order",
  "my account",
  "my favorite",
  "term of use",
  "privary policy",
];
const opening = [
  "Monday : 7:00am To 10:00pm",
  "Tuesday : 7:00am To 10:00pm",
  "Wednesday : 7:00am To 10:00pm",
  "Friday : 7:00am To 10:00pm",
  "Saturday And Sunday Closed",
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer-extra">
        <p>newsletter</p>
        <div className="footer-extra-email">
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-content-card">
          <p>our menu</p>
          {menu.map((item, i) => (
            <div className="footer-content-card-item">
              <i class="bx bx-right-arrow-alt"></i>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="footer-content-card">
          <p>quick links</p>
          {link.map((item, i) => (
            <div className="footer-content-card-item">
              <i class="bx bx-right-arrow-alt"></i>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="footer-content-card">
          <p>extra link</p>
          {extra.map((item, i) => (
            <div className="footer-content-card-item">
              <i class="bx bx-right-arrow-alt"></i>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="footer-content-opening">
          <p>opening hours</p>
          <div className="footer-content-opening-item">
            {opening.map((item, i) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-icon">
        <i class="bx bxl-facebook-square"></i>
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-twitter"></i>
        <i class="bx bxl-github"></i>
      </div>
      <span>Created tuyetnhi1607</span>
    </div>
  );
}

export default Footer;
