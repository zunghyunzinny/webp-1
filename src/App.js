// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Main from './page/Main';
import Intro from "./page/Intro";
import Profile from "./page/Profile";

import './App.css';
import Header from './style/Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: #E9F7E6;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
