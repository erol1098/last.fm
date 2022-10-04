import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path=':id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
