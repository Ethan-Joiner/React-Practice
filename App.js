import React from 'react';
import Tweet from './Tweet.js';
import './index.css';

function App() {
    return (
        <div className="app">
            <Tweet name="Dev ED" message="This is a random tweet"/>
            <Tweet name="One"/>
            <Tweet name="Two"/>
            <Tweet name="Three"/>

        </div>
    );
}

export default App;
