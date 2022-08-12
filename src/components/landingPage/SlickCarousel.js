import React from "react";
import Slider from "react-slick";
import "./Slickcarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickCarousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slick-container">
        <Slider {...settings}>
          <div>
            <img src={require("../../assets/download1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../assets/download1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../assets/download1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../assets/download1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../assets/download1.png")} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};
