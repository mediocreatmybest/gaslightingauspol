// src/App.js

import React, { useState } from 'react';
import quotesData from './quotes.json';
import QuoteDisplay from './QuoteDisplay';
import './App.css';

function App() {
    function getRandomQuoteIndex() {
        return Math.floor(Math.random() * quotesData.content.length);
    }

    const [currentIndex, setCurrentIndex] = useState(getRandomQuoteIndex());

    function handleNextQuote() {
        setCurrentIndex(prevIndex => (prevIndex + 1) % quotesData.content.length);
    }

    function handleRandomQuote() {
        setCurrentIndex(getRandomQuoteIndex());
    }

    return (
        <div className="App">
            <QuoteDisplay quote={quotesData.content[currentIndex]} />
            <button onClick={handleNextQuote}>Next Quote</button>
            <button onClick={handleRandomQuote}>Random Quote</button>
        </div>
    );
}

export default App;
