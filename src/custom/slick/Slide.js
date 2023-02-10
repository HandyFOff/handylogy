import React from 'react';
import { Link } from 'react-router-dom';

export default function Slide(props) {
    return (
        <div className='slider__card' style={{backgroundImage: `url('${props.img}')`}}>
            <span className='slider__card_category'>{props.category}</span>
            <h1 className='slider__card_title'>{props.title}</h1>
            <Link to={`/tests/${props.id}`} className='slider__card_btn'>Пройти тест</Link>
        </div>
    )
}