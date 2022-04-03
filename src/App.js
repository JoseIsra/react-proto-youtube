import React, { useState, useRef } from "react";
import YouTube from "react-youtube";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import FractalYoutube from "./utils/zoid";
function App() {
  const thevideo = useRef();
  const [options, setOptions] = useState({
    height: "400px",
    width: "100%",
    playerVars: {
      // eslint-disable-next-line no-restricted-globals
      origin: location.origin,
      fs: "0",
      autoplay: 1,
      mute: 1,
      controls: 1,
      rel: 0,
    },
  });

  const onReady = (event) => {
    const player = event.target;
    console.log(event);
    console.log("referencia de video", thevideo);
    player.playVideo();
    thevideo.current.internalPlayer.unMute();
  };

  return (
    <div className="container">
      <YouTube
        ref={thevideo}
        videoId="ksiqkLxtef4"
        opts={options}
        onReady={onReady}
      />
    </div>
  );
}

export default App;
