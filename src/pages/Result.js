import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '../components/home/Card';
import data from '../data/data.json'
import Layout from './Layout';

export default function Result() {

    const {id} = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        setContent(data[id])
    }, [id])

    return (
        <>
            {content && (
                <Layout>
                    <div className='result'>
                        <div className='result__hero' style={{backgroundImage: `url(${content.image})`}}>
                            <span className='result__hero_category'>{content.category}</span>
                            <h1 className='result__hero_title'>{content.name}</h1>
                            <Link to={`/tests/${id}`} className='result__hero_btn'>Пройти еще раз</Link>
                        </div>
                        <div className='result__content'>
                            <div className='container'>
                                <h1 className='result__content_title'>Ваши результаты:</h1>
                                <p className='result__content_description'>Вы - сангвиник. Сангвиник — один из четырёх типов темперамента в классификации Гиппократа. Человека сангвинического темперамента можно охарактеризовать как живого, подвижного, сравнительно легко переживающего неудачи и неприятности. Также это личность, характеризующаяся высокой психической активностью, энергичностью, работоспособностью, быстротой и живостью движений, разнообразием и богатством мимики, быстрым темпом речи. Сангвиник стремится к частой смене впечатлений, легко и быстро отзывается на окружающие события, общителен. </p>
                                <Link to='/' className='result__content_moreinfo'>Узнать поподробнее об результате теста</Link>
                            </div>
                        </div>
                        <div className='result__recomendation'>
                            <div className='container'>
                                <div className='result__recomendation_nav recomendation__nav'>
                                    <h1 className='recomendation__nav_title'>Тесты</h1>
                                    <div>grid/row</div>
                                </div>
                                <div className='result__recomendation_content recomendation__content'>
                                    {data.map(data => <Card key={data.id} id={data.id} title={data.name} category={data.category} img={data.image}/>)}
                                </div>
                                <button className='result__recomendation_btn btn-more'>Показать ещё</button>
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    )
}