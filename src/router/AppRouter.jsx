import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path=':name' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
