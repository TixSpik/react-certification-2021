import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Loader() {
    return <Loading />
}

const anim = keyframes`
   0% {
    transform: scale(1);
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const Loading = styled.div`
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    animation: ${anim} 1s infinite ease-out;
    margin: auto;
    border-radius: 50%;
    background-color: red;

`