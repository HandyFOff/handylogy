import React from 'react'
import { createRoot } from 'react-dom/client';
import './sass/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.js'

const app = document.getElementById('app');
const root = createRoot(app)
root.render(<App/>)