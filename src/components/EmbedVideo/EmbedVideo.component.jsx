import React from 'react'
import styled from 'styled-components'

export default function EmbedVideo({embedId}) {
    return (
        <IframeVideo
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    )
}

const IframeVideo = styled.iframe`
    left: 0;
    top: 0;
    height: 350px;
    width: 100%;
    position: relative;

    
  @media (min-width: 768px) {
    width: 70%;
    height: 600px;
  }
`