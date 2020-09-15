import React, {useState} from 'react';
import Tweet from './Tweet.js';
import './index.css';

function App() {

    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const [user, setUser] = useState({
        name: "Ed",
        age: 25,
        posts: ['Ed first post', 'Ed second post', 'Ed third post']
    });

    const increment = () => {
        setCount(count + 1)
        setRed(true);
    }

    return (
        <div className="app">
         <h1 className={isRed ? 'red' : ""}>Change my color</h1>
         <button onClick = {increment}>Increment</button>
         <h1>{count}</h1>

        </div>
    );
}

export default App;
