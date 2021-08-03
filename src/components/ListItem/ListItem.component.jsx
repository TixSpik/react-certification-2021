import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading/Heading.component';

export default function ListItem(item) {
  const { snippet } = item;

  return (
    <ItemContainer>
      <CardImage img={snippet.thumbnails.medium.url} />
      <CardContent>
        <Heading>{snippet.title}</Heading>
        <p>{snippet.description}</p>
      </CardContent>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  width: 345px;
  min-height: 345px;
  margin: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.img});
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 155px;
`;

const CardContent = styled.div`
  padding: 16px;
`;
