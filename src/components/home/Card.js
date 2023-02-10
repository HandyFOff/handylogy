import React from 'react';
import {Link} from "react-router-dom";

export default function Card(props) {
    return (
        <div className='tests__card' style={{backgroundImage: `url('${props.img}')`}}>
            <span className='tests__card_category'>{props.category}</span>
            <h1 className='tests__card_title'>{props.title}</h1>
            <Link to={`/tests/${props.id}`} className='tests__card_btn'>Пройти тест</Link>
        </div>
    )
}