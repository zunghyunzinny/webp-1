import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../style/Main.css';

import Intro from './Intro';


function Logo({ onClick, isOpen }) {
  return (
    <div className = { `ksu-software ${ isOpen ? 'open' : '' }` }
     onClick = { onClick }>
      KSU SOFTWARE
     </div>
  );
}

function Menu({ isOpen }) {
  return (
    <div className = { `menu ${ isOpen ? 'open' : '' }` }>
        <Link className ="menu-item" to={"/Intro"}>학과 소개</Link>
        <Link className = "menu-item" to={"/Profile"}>교수진 소개</Link>
      <div className = "menu-item">교육목표 및 인재상</div>
      <div className = "menu-item">학과 연혁</div>
    </div>
  );
}

function Main() {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoClick = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className = "all">
      <header>
        <div className="all">
          <Logo onClick = { handleLogoClick }
           isOpen = { showMenu } />
        </div>
      </header>

      <main>
        <Menu isOpen = { showMenu } />
        <Routes>
          <Route path ="/Intro" element={<Intro />} />
        </Routes> 
      </main>

    </div>
  );
}

export default Main;