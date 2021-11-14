import React, {useEffect, useRef, useState} from 'react'
import './star.scss'
import 'boxicons'


function Star(props) {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const ref = useRef();
  const change = (value) => {
    setHover(value);
    //ref.current.classList.toggle('bxs-like');
  }
  const change1 = (value) => {
    setRating(value);
    ref.current.classList.toggle('bxs-like');
  }
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => change1(index)}
            onMouseEnter={() => change(index)}
            onMouseLeave={() => change(rating)}
          >
            <i ref={ref} class='bx bx-star'></i>
          </button>
        );
      })}
    </div>
  );
}

export default Star;
