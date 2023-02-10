import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import data from '../data/data.json'

export default function Test() {

    const {id} = useParams();
    const [content, setContent] = useState(null);
    let [count, setCount] = useState(1);
    let params = data[id].data.params;

    useEffect(() => {
        setContent(data[id])
    }, [id])

    function nextQuest(e) {
        let obj = content.data.questions[count].answers[e.target.textContent];
        if (content.data.questions[count].id === content.data.questions.length) {
            window.location.href = `tests/result/${id}`;
        } else {
            for (let i = 0; i < obj.length; i++) {
                params[obj[i]]++;
            }
            setCount(count += 1);
        }
    }

    return (
        <>
            {content && (
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