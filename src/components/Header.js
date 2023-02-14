import React from 'react';
import { Link } from 'react-router-dom';
import Burger from '../custom/burger/Burger';

export default function Header() {
    let [active, setActive] = React.useState(false);
    
    function show() {
        document.body.style.overflow = "hidden";
        setActive(true);
    }

    function close() {
        document.body.style.overflow = "auto"
        setActive(false)
    }
    return (
        <header className='header'>
            <div className='container'>
                <Link to={'/'} className='header__logo'>хэндилогия</Link>
                <nav className='nav'>
                    <a className='nav__item' href='#tests'><span>Тесты</span></a>
                    <a className='nav__item' href='#github'><span>GitHub</span></a>
                    <a className='nav__item' href='#faq'><span>FAQ</span></a>
                </nav>
                <div className='burger__button' onClick={show}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Burger active={active} setActive={setActive}>
                    <nav className="burger__nav nav">
                        <a className="nav__item" href="#about" onClick={close}>About</a>
                        <a className="nav__item" href="#projects" onClick={close}>Projects</a>
                        <a className="nav__item" href="#footer" onClick={close}>Contacts</a>
                    </nav>
                </Burger>
            </div>
        </header>
    )
}