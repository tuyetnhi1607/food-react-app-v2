import React from 'react'
import combo from '../assets/cat-1.png';
import pizza from '../assets/cat-2.png';
import burger from '../assets/cat-3.png';
import chiken from '../assets/cat-4.png';
import dinner from '../assets/cat-5.png';
import coffee from '../assets/cat-6.png';
import './categories.scss';


const data = [
    {
        img: combo,
        name: 'combo',
    },
    {
        img: pizza,
        name: 'pizza',
    },
    {
        img: burger,
        name: 'burger',
    },
    {
        img: chiken,
        name: 'chiken',
    },
    {
        img: dinner,
        name: 'dinner',
    },
    {
        img: coffee,
        name: 'coffee',
    },

]
function Categories() {
  return (
    <div className="categories" id="menu">
      {data.map((item, i) => (
        <div className="categories-item">
          <img src={item.img} alt="" />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories
