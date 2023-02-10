import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

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
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
      };

      return (
        <div className='slider'>
          <Slider {...settings}>
            <Slide title="Test Number One" category="psychology" img="https://www.fonstola.ru/pic/202006/1680x1050/fonstola.ru_395042.jpg"/>
            <Slide title="Test Number Two" category="psychology" img="https://i.ytimg.com/vi/Zk5LI-uoyAA/maxresdefault.jpg"/>
            <Slide title="Test Number Three" category="psychology" img="https://i.ytimg.com/vi/v2HEh8QQYEg/maxresdefault.jpg"/>
          </Slider>
        </div>
      );
}