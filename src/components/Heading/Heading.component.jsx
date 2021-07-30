import React from 'react'
import styled from 'styled-components'

export default function Heading({ children }) {
    return (
        <Title>
            {children}     
        </Title>
    )
}

const Title = styled.h2`
    font-size: 20px;
`
