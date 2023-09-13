// src/QuoteDisplay.js
import React, { useState, useRef } from 'react';

function QuoteDisplay({ quote }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const audioURL = `/media/${quote.Index}.mp3`;

    function handleAudioPlayPause() {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="quote-box">
            <div className="main-content">
                <p className="quote">"{quote.Quote}"</p>
                <p className="author">- {quote.Antagonist}</p>
                <p className="scene-heading">Let's set the scene:</p>
                <p className="context">{quote.Context}</p>
            </div>

            <div className="sources">
                <p>Sources: {quote.URL.map((url, index) => (
                    <span key={index}><a href={url} target="_blank" rel="noreferrer">{url}</a>{index !== quote.URL.length - 1 ? ', ' : ''}</span>
                ))}</p>
            </div>

            {/* Audio Player */}
            <audio ref={audioRef} src={audioURL} onEnded={() => setIsPlaying(false)}></audio>
            <button onClick={handleAudioPlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
}

export default QuoteDisplay;
