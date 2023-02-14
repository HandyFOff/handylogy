import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import data from '../../data/data.json';

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
        arrows: window.innerWidth < 425 ? false : true,
        autoplay: true,
        autoplaySpeed: 7000,
      };

      return (
        <div className='slider'>
          <Slider {...settings}>
            {data.map((data) => <Slide key={data.id} id={data.id} title={data.name} category={data.category} img={data.image}/>)}
          </Slider>
        </div>
      );
}