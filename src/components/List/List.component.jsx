import React from 'react'
import styled from 'styled-components'
import mock from '../../youtube-videos-mock.json'
import ListItem from '../ListItem'

export default function List() {
    return (
        <ListContainer>
            {
                mock.items.map((item) => (
                    <div
                        key={item.snippet.publishedAt}
                    >
                        <ListItem {...item} />
                    </div>
                ))
            }
        </ListContainer>
    )
}

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center
`
