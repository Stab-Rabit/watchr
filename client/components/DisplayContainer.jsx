/* eslint-disable react/prefer-stateless-function */
// renders movie display and stream display
import React from 'react';
import StreamsDisplay from './StreamsDisplay.jsx';
//creates DisplayContainer react component which displays search results
const DisplayContainer = ({ posterUrl, streams }) => (
  <div id="display-container">
    <img src={posterUrl} alt="movie" />
    <span>Streaming On</span>
    <StreamsDisplay streams={streams} />
  </div>
);

export default DisplayContainer;
