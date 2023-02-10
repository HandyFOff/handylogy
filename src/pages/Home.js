import React from 'react';
import Tests from '../components/home/Tests';
import Slick from '../custom/slick/Slick';
import Layout from './Layout';

export default function Home() {
    return (
        <Layout>
            <div className='home'>
                <Slick/>
                <Tests/>
            </div>
        </Layout>
    )
}