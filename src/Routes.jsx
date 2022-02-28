import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:name" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};
