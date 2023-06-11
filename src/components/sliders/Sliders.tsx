import React from "react";
import Slider from "react-slick";

type Props = {
  sliderData: any;
};

const Sliders = ({ sliderData }: Props) => {
  const settings = {
    // className: Style,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide: any, index: React.Key) => {
        return (
          <div key={index}>
            <img
              src={`/static/img/${slide.imgUrl}`}
              alt="slider"
              className="image"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default Sliders;
