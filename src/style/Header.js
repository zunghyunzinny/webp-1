// style/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Intro from '../page/Intro';

function Logo({ onClick, isOpen }) {
  return (
    <Link className={`ksu-software ${isOpen ? 'open' : ''}`} onClick={onClick} to="/main">
      KSU SOFTWARE
    </Link>
  );
}

function Menu({ isOpen }) {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <Link className="menu-item" to="/Intro">학과 소개</Link>
      <Link className="menu-item" to="/Profile">교수진 소개</Link>
      <div className="menu-item">교육목표 및 인재상</div>
      <div className="menu-item">학과 연혁</div>
    </div>
  );
}

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderWrapper>
      <div className="all">
        <header>
          <div className="all">
            <Logo onClick={handleLogoClick} isOpen={showMenu} />
          </div>
        </header>
          <Menu isOpen={showMenu} />
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  .ksu-software {
    font-family: "001.ttf";
    font-size: 40px;
    transition: transform 2s ease;
    color: #262626;
    cursor: pointer;
    text-decoration: none
  }

  .ksu-software.open {
    transform: translateY(-100px);
  }

  .all {
    background-color: #E9F7E6;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .a3 {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0px;
    cursor: pointer;
  }

  .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    opacity: 0;
    transition: transform 2s ease;
  }

  .menu.open {
    opacity: 1;
    transform: translateY(-300px);
  }

  .menu-item {
    margin: 5px;
    padding: 10px 20px;
    background-color: #E9F7E6;
    color: #262626;
    border: 1px solid #262626;
    border-radius: 0px;
    cursor: pointer;
    font-family: "002.ttf";
    font-size: 12px;
    text-decoration: none;
  }
`;

export default Header;
