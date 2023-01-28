import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <h1 className='header__logo'>хэндилогия</h1>
                <nav className='nav'>
                    <a className='nav__item' href='#tests'><span>Тесты</span></a>
                    <a className='nav__item' href='#github'><span>GitHub</span></a>
                    <a className='nav__item' href='#faq'><span>FAQ</span></a>
                </nav>
            </div>
        </header>
    )
}