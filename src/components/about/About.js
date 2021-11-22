import React from 'react'
import './about.scss'
import poster from '../assets/about-img.png'
import delivery from '../assets/serv-1.png'
import food from '../assets/serv-2.png'
import quality from '../assets/serv-3.png'
import support from '../assets/serv-4.png'

const data =[
    {
        img: delivery,
        title: "Fast Delivery"
    },
    {
        img: food,
        title: "Fresh Food"
    },
    {
        img: quality,
        title: "Best Quality"
    },
    {
        img: support,
        title: "24/7 Support"
    },

]

function About() {
    return (
        <div className="about" id="about">
            <div className="about-poster">
                <img src={poster} alt=" " />
            </div>
            <div className="about-content">
                <span >Why choose us?</span>
                <h3>What's Make Our Food Delicious!</h3>
                <h5>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Ut Explicabo, Numquam Iusto Est A Ipsum Assumenda Tempore Esse Corporis?</h5>
                <button>Read more</button>
                <div className="about-content-card">
                    {
                        data.map((item, i) => (
                            <div className="about-content-card-item">
                                <img src={item.img} alt="" />
                                <h4>{item.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About
