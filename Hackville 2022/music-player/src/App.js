import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Player from './components/Player';



function App() {
  const [songs] = useState([
    {
      title: "Calm Forest Sounds",
      img_src: "./images/song-1.jpg",
      src: "./music/forest.mp3"
    },
    {
      title: "Calm Ocean Sounds",
      img_src: "./images/song-2.jpg",
      src: "./music/ocean.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } 
      else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
