import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import NotEnoughFound from './pages/NotEnoughFound';
import Result from './pages/Result';
import Test from './pages/Test';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/tests/:id" element={<Test/>}></Route>
        <Route path="/tests/:id/result" element={<Result/>}></Route>
        <Route path="/tests/*" element={<NotEnoughFound/>}></Route>
        <Route path='*' element={<NotEnoughFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}