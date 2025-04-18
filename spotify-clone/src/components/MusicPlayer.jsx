import React from "react";
import "../App.css"; // Make sure to add this CSS file

function MusicPlayer() {
  return (
    <div className='slim-apple-music-player m'>
      <div className='album-art'>
        <img
          src='https://cdn-images.dzcdn.net/images/cover/4659d4d1655e3bb97f7195bd8ee0e16e/500x500-000000-80-0-0.jpg'
          alt='Album'
        />
      </div>

      <div className='song-info'>
        <h3>We Drink Your Blood</h3>
        <p>Powerwolf</p>
      </div>

      <div className='controls'>
        <button className='control-btn'>
          <i className='bi bi-skip-start'></i>
        </button>
        <button className='play-btn'>
          <i className='bi bi-play-circle-fill'></i>
        </button>
        <button className='control-btn'>
          <i className='bi bi-skip-end'></i>
        </button>
      </div>

      <div className='progress-bar'>
        <input type='range' min='0' max='100' value='50' disabled />
      </div>

      <div className='volume-control'>
        <i className='bi bi-volume-up'></i>
        <input type='range' min='0' max='1' step='0.01' value='0.5' disabled />
      </div>
    </div>
  );
}

export default MusicPlayer;
