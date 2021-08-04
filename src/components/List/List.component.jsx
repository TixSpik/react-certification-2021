import React, { useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../ListItem';
import Loader from '../Loader';

export default function List( {result, loading, error, data } ) {
 
  useEffect(() => {
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
      {result?.items ? (
        result?.items.map((item, idx) => (
          <div key={idx}>
            <ListItem data={data} {...item} />
          </div>
        ))
      ): <div>No hay resultados</div>}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
