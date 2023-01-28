import React from 'react';
import Slider from 'react-slick';

/*

    npm imports:
    1. npm i react-slick
    2. npm i slick-carousel --save

    Put in your MAIN.js file:
    
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

*/

export default function Slick() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
      };
      return (
        <div className='slider'>
          <Slider {...settings}>
                <div className='slider__card'>
                  <span className='slider__card_category'>психология</span>
                  <h1 className='slider__card_title'>Тест на определение темперамента</h1>
                  <button className='slider__card_btn'>Пройти тест</button>
                </div>
                <div className='slider__card'>
                  <span className='slider__card_category'>психология</span>
                  <h1 className='slider__card_title'>Тест на определение темперамента</h1>
                  <button className='slider__card_btn'>Пройти тест</button>
                </div>
                <div className='slider__card'>
                  <span className='slider__card_category'>психология</span>
                  <h1 className='slider__card_title'>Тест на определение темперамента</h1>
                  <button className='slider__card_btn'>Пройти тест</button>
                </div>
          </Slider>
        </div>
      );
}