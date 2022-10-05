import React from 'react';

import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: mode === 'dark' ? '#555' : '#fff',
        }}
      >
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path=':name' element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
