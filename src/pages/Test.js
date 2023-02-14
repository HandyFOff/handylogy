import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Card from '../components/home/Card';
import data from '../data/data.json'
import Layout from './Layout';

export default function Test() {

    const {id} = useParams();
    const [content, setContent] = useState(null);
    let [count, setCount] = useState(0);
    let params = data[id].data.params;
    let [finished, setFinished] = useState(false)
    let [res, setRes] = useState(null)

    let arrStatistics = [];

    useEffect(() => {
        setContent(data[id]);
    }, [id])

    function nextQuest(e) {
        let obj = content.data.questions[count].answers[e.target.textContent];
        if (content.data.questions[count].id === content.data.questions.length) {
            calculateResult()
            setFinished(true);
        } else {
            for (let i = 0; i < obj.length; i++) {
                params[obj[i]].count++;
            }
            setCount(count += 1);

            console.log(params);
        }
    }

    function calculateResult() {
        for (let key in params) {arrStatistics.push(params[key].count)}
        let leader = Math.max.apply(null, arrStatistics);
        for (let key in params) {if (params[key].count === leader) setRes(key)}
    }

    function retry() {
        setCount(0);
        setFinished(false)
    }

    return (
        <>
            {finished ? (
                content && (
                    <Layout>
                        <div className='result'>
                            <div className='result__hero' style={{backgroundImage: `url(${content.image})`}}>
                                <span className='result__hero_category'>{content.category}</span>
                                <h1 className='result__hero_title'>{content.name}</h1>
                                <Link to={`/tests/${id}`} onClick={() => retry()} className='result__hero_btn'>Пройти еще раз</Link>
                            </div>
                            <div className='result__content'>
                                <div className='container'>
                                    <h1 className='result__content_title'>Ваши результаты:</h1>
                                    <p className='result__content_description'>{params[res].description}</p>
                                    <Link to='/' className='result__content_moreinfo'>Узнать поподробнее об результате теста</Link>
                                </div>
                            </div>
                            <div className='result__recomendation'>
                                <div className='container'>
                                    <div className='result__recomendation_nav recomendation__nav'>
                                        <h1 className='recomendation__nav_title'>Тесты</h1>
                                        {/* <div>grid/row</div> */}
                                    </div>
                                    <div className='result__recomendation_content recomendation__content'>
                                        {data.map(data => <Card key={data.id} id={data.id} title={data.name} category={data.category} img={data.image}/>)}
                                    </div>
                                    <button className='result__recomendation_btn btn-more'>Показать ещё</button>
                                </div>
                            </div>
                        </div>
                    </Layout>
                )
            ) : content && (
                <div className='test'>
                    <div className='container'>
                        <div className='test__header'>
                            <div className='test__header_counter'>{count}/{content.data.questions.length}</div>
                            <Link to={'/'} className='test__header_back'>Вернуться назад</Link>
                        </div>
                        <div className='test__content'>
                            <h1 className='test__content_title'>{content.data.questions[count].name}</h1>
                            <div className='test__content_choices'>
                                {Object.keys(content.data.questions[count].answers).map(
                                    (key, index) => <div onClick={(e) => nextQuest(e)} key={index}>{key}<br/></div>)
                                }
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )}
        </>
    )
}