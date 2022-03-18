import React, { useEffect, useState } from 'react';
import Eachtodo from './Eachtodo';
import './Todo.css';

const Todo = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodo(data));
    }, []);

    return (
        <div>
            <h1>This is To-Do List (Total To Do : {todo.length})</h1>
            <div className='todo-container'>
                {
                    todo.map(eachTodo => <Eachtodo
                        key={eachTodo.id}
                        eachTodo={eachTodo}

                    ></Eachtodo>)
                }
            </div>

        </div >
    );
};

export default Todo;