import React from 'react';

const Eachtodo = (props) => {
    console.log(props.eachTodo)
    return (
        <div style={{ border: '2px solid blue', borderRadius: '10px', backgroundColor: 'lightcyan' }}>
            <h4>ID: {props.eachTodo.id}</h4>
            <p>Title: {props.eachTodo.title}</p>
            <p><small>UserId: {props.eachTodo.userId}</small></p>
        </div>
    );
};

export default Eachtodo;