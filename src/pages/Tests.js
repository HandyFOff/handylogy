import React from 'react';
import Slick from '../custom/slick/Slick';
import Layout from './Layout';

export default function Tests() {
    return (
        <Layout>
            <div className='test__slider'>
                <Slick/>
            </div>
        </Layout>
    )
}