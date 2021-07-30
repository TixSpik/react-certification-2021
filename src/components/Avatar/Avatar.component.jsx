import React from 'react'
import styled from 'styled-components'

export default function Avatar() {
    return (
        <Wrapper>
            <Image>

            </Image>
        </Wrapper>
    )
}

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
cursor: pointer;
  box-sizing: border-box;
  border-radius: 50%;
  border: 5px solid #ddd;
  padding: 10px;
  width: 40px;
  height: 40px;
  background: url(https://avatars.dicebear.com/api/bottts/.svg) no-repeat;
`;
