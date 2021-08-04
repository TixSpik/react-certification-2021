import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import SearchIcon from '../../assets/img/search.svg'

export default function SearchInput({ setSearchInput, fetchData, searchInput }) {

    const history = useHistory()

    return (
        <SearchBox>
            <Input placeholder='React, Node, Python...' onChange={e => setSearchInput(e.target.value)} />
            <SearchBtn  onClick={() => {
                history.push('/')
                fetchData(searchInput)
            }}>
                <img src={SearchIcon} alt='search icon'/>
            </SearchBtn>
        </SearchBox>
    )
}

const SearchBox = styled.div`
    width: 40%;
    position: relative;
    display: flex;

    @media (max-width: 768px) {
    width: 100%;
  }
`
const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 4px solid #fff;
    border-radius:10px 0 0 10px ;
    border-right: none;
    outline: none;
    font-size: 20px;
    color: #000;
    background: white;
    font-size: 0.9rem;
`
const SearchBtn = styled.button`
    text-align: center;
    height: 51px;
    width: 40px;
    outline: none;
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 0 10px 10px 0 ;
    border-left: none;
    background: white;
    font-size: 20px;
    border-left: 1px solid #111d5e;

    &:hover {
    background: #d1d1d1;
  }
`