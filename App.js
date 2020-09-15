import React from 'react';
import Tweet from './Tweet.js';
import './index.css';

function App() {
    return (
        <div className="app">
            <Tweet name="Dev ED" message="This is a random tweet"/>
            <Tweet name="One" message="Eins"/>
            <Tweet name="Two" message="Zwei"/>
            <Tweet name="Three" message="Drei"/>

        </div>
    );
}

export default App;
