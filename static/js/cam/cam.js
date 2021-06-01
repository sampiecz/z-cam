import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './navigation.js'
import VideoStream from './videoStream.js'
import Controls from './controls.js'

function Cam() {
  return (
    <>
      <Navigation />
      <VideoStream /> 
      <Controls />
    </>
  );
}

ReactDOM.render(
  <Cam />,
  document.getElementById('react')
);
