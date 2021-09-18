// import { PageTitle } from '../PageTitle/PageTitle';
// import { EventBoard } from '../EventBoard/EventBoard';
// import upcomingEvents from '../../upcoming-events.json';

// function App() {
//   return (
//     <div>
//       <PageTitle>24th Core Worlds Coalition Conference</PageTitle>
//       <EventBoard events={upcomingEvents} />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import { VideoList } from '../VideoList/VideoList';
import { VimeoPlayer } from '../VimeoPlayer/VimeoPlayer';
import videos from '../../data/videos.json';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 240px;
`;

export default class App extends Component {
  state = { selectedVideo: null };

  selectVideo = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <AppContainer>
        <VimeoPlayer url={selectedVideo} />
        <VideoList
          videos={videos}
          selectedVideo={selectedVideo}
          onSelect={this.selectVideo}
        />
      </AppContainer>
    );
  }
}
