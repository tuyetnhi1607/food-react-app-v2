import React from "react";
import "./info.scss";

function Info() {
  return (
    <div className="info">
      <div className="info-col-1">
        <div className="info-col-1-item">
          <p>your name</p>
          <input type="text" placeholder="customer'name" />
        </div>
        <div className="info-col-1-item">
          <p>your order</p>
          <input type="text" placeholder="customer'name" />
        </div>
        <div className="info-col-1-item">
          <p>your name</p>
          <input type="text" placeholder="food you want" />
        </div>
        <div className="info-col-1-item">
          <p>your details</p>
          <input type="text" placeholder="your message" />
        </div>
        <div className="info-col-1-item">
          <textarea
            type="text"
            placeholder="your address"
            className="address"
          />
        </div>
        <button>proeed to order</button>
      </div>
      <div className="info-col-2">
        <div className="info-col-2-item">
          <p>your name</p>
          <input type="text" placeholder="customer'name" />
        </div>
        <div className="info-col-2-item">
          <p>your order</p>
          <input type="text" placeholder="customer'name" />
        </div>
        <div className="info-col-2-item">
          <p>your name</p>
          <input type="text" placeholder="food you want" />
        </div>
        <div className="info-col-2-item">
          <p>your details</p>
          <input type="text" placeholder="your message" />
        </div>
        <div className="info-col-2-item">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59615.811550818835!2d105.71730835745876!3d20.952988132789994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134532bef4bcdb7%3A0xbcc7a679fcba07f6!2zSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1636387546047!5m2!1svi!2s"
            className="map"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        
      </div>
      
    </div>
  );
}

export default Info;
