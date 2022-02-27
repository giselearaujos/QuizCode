import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};
