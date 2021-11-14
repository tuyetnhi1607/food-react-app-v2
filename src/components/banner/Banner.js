import React, {useRef, useEffect} from "react";
import banner1 from "../assets/home-img.png";
import banner2 from "../assets/home-parallax-img.png";
import "./banner.scss";

function Banner() {
  const mouse = useRef("");
  useEffect(() => {
    document.querySelector(".banner").onmousemove = (e) => {
      let x = (window.innerWidth - e.pageX * 2) / 60;
      let y = (window.innerHeight - e.pageY * 2) / 60;

     mouse.current.style.transform = `translateX(${y}px) translateY(${x}px)`;
    };
    document.querySelector(".banner").onmouseleave = () => {
        mouse.current.style.transform = `translateX(0px) translateY(0px)`;
      };
  },[]);
  return (
    <div className="banner">
      <div className="banner-content">
        <span >Welcome Foodies</span>
        <h3 >
          Different Spices For The Different Tastes{" "}
        </h3>
        <h5 >
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis Unde
          Dolores Temporibus Hic Quam Debitis Tenetur Harum Nemo.
        </h5>
        <button >order now</button>
      </div>
      <div className="banner-image">
        <img src={banner1} alt="" className="banner-image-after" />
        <img ref={mouse} style={{}} src={banner2} alt="" className="banner-image-before" />
      </div>
    </div>
  );
}

export default Banner;
