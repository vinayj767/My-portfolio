import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Portfolio from './Pages/Portfolio';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Layout>
  );
}

export default App;