import React from "react";
import './index.css';

function Tweet({name, message, posts}) {
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{posts}</h3>
        </div>
    )
}

export default Tweet