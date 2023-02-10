import React from 'react';

export default function NotEnoughFound() {

    console.log(window.location.href.split('/'));

    return (
        <div className='notenoughfound'>
            <h1 className='notenoughfound__error'>Error 404. Page not found {':('}</h1>
        </div>
    )
}