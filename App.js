import React, {useState} from 'react';
import Tweet from './Tweet.js';
import './index.css';

function App() {

    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const [users, setUser] = useState([
        {
        name: "Ed",
        age: 25,
        message: 'Hello',
        posts: ['Ed first post', 'Ed second post', 'Ed third post']
        }, 
        {
        name: 'John',
        message: 'Howdy'
        }
    ]);

    const increment = () => {
        setCount(count + 1)    
        setRed(!isRed);
        
    }

    return (
        <div className="app">
         <h1 className={isRed ? 'red' : ""}>Change my color</h1>
         <button onClick = {increment}>Increment</button>
         <h1>{count}</h1>

        <div>
         {users.map(user => (
             <Tweet name={user.name} message={user.message}/>
         ))}

        </div>
        </div>
    );
}

export default App;
