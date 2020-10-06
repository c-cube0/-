import React from 'react';

const Counter = (props) => (
    <div>
        <h1>count: {props.count}</h1>
        <button onClick={() => { props.onClick(1) }}>+</button>
        <button onClick={() => { props.onClick(-1) }}>-</button>
    </div>
)

export default Counter;