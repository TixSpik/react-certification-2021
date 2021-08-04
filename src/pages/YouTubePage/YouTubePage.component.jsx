import React from 'react'
import { useLocation, useParams } from 'react-router'
import styled from 'styled-components';
import EmbedVideo from '../../components/EmbedVideo/EmbedVideo.component'
import Heading from '../../components/Heading/Heading.component';
import List from '../../components/List';
import useFetch from '../../utils/hooks/useFetch';

export default function YouTubePage() {
    const params = useParams();
    const { state } = useLocation();
    const { loading, result, error } = useFetch(state.data?.length ? state.data : 'Wizeline')

    console.log(state)
    return (
        <VideoContainer>
            <EmbedVideo embedId={params.id} />
            <ContentContainer >
                <Heading >
                    {state.snippet.title}
                </Heading>
                <Paragraph >
                    {state.snippet.description}
                </Paragraph>
            </ContentContainer>
            <div>
                <List loading={loading} result={result} error={error} />
            </div>
        </VideoContainer>
    )
}

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContentContainer = styled.div`
    width: 70%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`

const Paragraph = styled.p`
    overflow-wrap: break-word;
`