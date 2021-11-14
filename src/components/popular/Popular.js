import React from 'react'
import Star from './Star'
import 'boxicons'
import './popular.scss';
import img1 from '../assets/food-1.png'
import img2 from '../assets/food-2.png'
import img3 from '../assets/food-3.png'
import img4 from '../assets/food-4.png'
import img5 from '../assets/food-5.png'
import img6 from '../assets/food-6.png'
import img7 from '../assets/food-7.png'
import img8 from '../assets/food-8.png'

const data = [
    {
        img: img1,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img2,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img3,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img4,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img5,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img6,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img7,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },
    {
        img: img8,
        name: "delicious food",
        price: "$50.00",
        sale: "$40.00"
    },

    
]

function Popular() {
    return (
        <div className="popular">
            <span>popular food</span>
            <h3>our special dishes</h3>
            <div className="popular-list">
                {
                    data.map((item, i)=>(
                        <div className="popular-list-item">
                            <div className="popular-list-item-heart">
                                <i class='bx bxs-heart' ></i>
                            </div>
                            <img src={item.img} alt=""/>
                            <h3>{item.name}</h3>
                            <div className="popular-list-item-star">
                                <Star />
                            </div>
                            <div className="popular-list-item-cost">
                                <h3>{item.price}</h3>
                                <h4>{item.sale}</h4>
                            </div>
                            <button>add to cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Popular
