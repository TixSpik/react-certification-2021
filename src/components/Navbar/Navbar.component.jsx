import React, { useState } from 'react'
import styled from 'styled-components'
import Logotipo from '../../assets/img/wizeline-logo.png'
import Avatar from '../Avatar/Avatar.component'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <Nav>
            <Logo href=''>
                <img width='150px' src={Logotipo} alt='logotipo' />
            </Logo>
            <BurguerIcon onClick={() => setToggleMenu(!toggleMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </BurguerIcon>
            <Menu toggleMenu={toggleMenu}>
                <MenuLink>Button</MenuLink>
                <Avatar />
            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #1C5476;
    color: white;
`

const Logo = styled.a`
    padding: 1rem 0;
    text-decoration: none;
    color: white;
`

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

    @media (max-width: 768px){
        display: flex;
    }
`

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in;

    &:hover {
        color: rgb(137, 207, 253);
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px){
        overflow: hidden;
        margin-bottom: 1rem;
        flex-direction: column;
        width: 100%;
        max-height: ${({toggleMenu}) => (toggleMenu ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`