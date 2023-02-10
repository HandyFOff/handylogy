import React from 'react';
import Card from './Card';
import testsData from '../../data/data.json';

export default function Tests() {
    return (
        <div className='tests'>
            <div className='container'>
                <div className='tests__nav'>
                    <h1 className='tests__nav_title'>Тесты</h1>
                    <div>grid/row</div>
                </div>
                <div className='tests__content'>
                    {testsData.map(data => <Card key={data.id} id={data.id} title={data.name} category={data.category} img={data.image}/>)}
                </div>
                <button className='tests__btn btn-more'>Показать ещё</button>
            </div>
        </div>
    )
}