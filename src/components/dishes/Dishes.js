import React from 'react'
import './dishes.scss'
import img1 from '../assets/menu-1.png'
import img2 from '../assets/menu-2.png'
import img3 from '../assets/menu-3.png'
import img4 from '../assets/menu-4.png'
import img5 from '../assets/menu-5.png'
import img6 from '../assets/menu-6.png'

const data = [
    {
        img: img1,
        name: 'delicious food',
        cost: "$40.00"
    },
    {
        img: img2,
        name: 'delicious food',
        cost: "$40.00"
    },
    {
        img: img3,
        name: 'delicious food',
        cost: "$40.00"
    },
    {
        img: img4,
        name: 'delicious food',
        cost: "$40.00"
    },
    {
        img: img5,
        name: 'delicious food',
        cost: "$40.00"
    },
    {
        img: img6,
        name: 'delicious food',
        cost: "$40.00"
    },

]
function Dishes() {
    return (
      <div className="dishes">
        <span>our menu</span>
        <h3>out top dishes</h3>
        <div className="dishes-menu">
          {data.map((item, i) => (
            <div className="dishes-menu-item">
                <img src={item.img} alt=""/>
                <div className="dishes-menu-item-content">
                    <h4>{item.name}</h4>
                    <h5>{item.cost}</h5>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Dishes
