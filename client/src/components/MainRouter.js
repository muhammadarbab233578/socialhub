import React from 'react';
import { Routes, Route } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Welcome to MERN Social!</div>} />
      <Route path="/users" element={<div>Users Page - Coming Soon</div>} />
    </Routes>
  );
};

export default MainRouter;