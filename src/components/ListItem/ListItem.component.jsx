import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Heading from '../Heading/Heading.component';

export default function ListItem(item) {

  const history = useHistory();
  const { snippet, data } = item;

  return (
    <ItemContainer onClick={() => {
      history.push(`/video/${item.id.videoId}`, {
        data,
        snippet
      })
    }}>
      <CardImage img={snippet.thumbnails.medium.url} />
      <CardContent>
        <Heading>{snippet.title}</Heading>
        <Paragraph>{snippet.description}</Paragraph>
      </CardContent>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
cursor: pointer;
  width: 345px;
  min-height: 345px;
  margin: 10px;
  transition: transform .2s;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);

    &:hover {
      transform: scale(1.03);
    }
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

const Paragraph = styled.p`
    overflow-wrap: break-word;
`