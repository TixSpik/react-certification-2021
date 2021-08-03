import React, { useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../ListItem';
import Loader from '../Loader';

export default function List({ result, loading, error }) {

  useEffect(() => {
    console.log(result?.items)
  }, [result, loading, error])

  if (loading) {
    return (
      <ListContainer>
        <Loader />
      </ListContainer>
    )

  }

  return (
    <ListContainer>
      {result?.items && (
        result?.items.map((item, idx) => (
          <div key={idx}>
            <ListItem {...item} />
          </div>
        ))
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
