import React from 'react';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Tests from './pages/Tests';
import Result from './pages/Result';
import Test from './pages/Test';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Tests/>}></Route>
        <Route element={<Result/>}></Route>
        <Route element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}