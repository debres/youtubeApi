import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.section`

`;

const VideoPleyer = () => {
  return (
    <VideoContainer>
      <iframe width="640" height="420"
              src={`https://www.youtube.com/embed/${this.props.id}`}
              frameBorder="0"
              allowFullScreen
              title='title'>
      </iframe>
    </VideoContainer>
  )
}

export default VideoPleyer;
