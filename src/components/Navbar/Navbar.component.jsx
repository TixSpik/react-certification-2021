import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logotipo from '../../assets/img/wizeline-logo.png';
import Avatar from '../Avatar/Avatar.component';
import SearchInput from '../SearchInput';

export default function Navbar({ setSearchInput, fetchData, searchInput }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Nav data-testid="navbar">
      <Logo to='/'>
        <img width="150px" src={Logotipo} alt="logotipo" />
      </Logo>
      <SearchInput fetchData={fetchData} setSearchInput={setSearchInput} searchInput={searchInput} />
      <BurguerIcon onClick={() => setToggleMenu(!toggleMenu)}>
        <span />
        <span />
        <span />
      </BurguerIcon>
      <Menu toggleMenu={toggleMenu}>
        <MenuLink>Button</MenuLink>
        <Avatar />
      </Menu>
    </Nav>
  );
}

const Nav = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #1c5476;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
  color: white;
`;

const BurguerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    margin-top: 1rem
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: rgb(137, 207, 253);
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    margin-bottom: 1rem;
    flex-direction: column;
    width: 100%;
    max-height: ${({ toggleMenu }) => (toggleMenu ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;
