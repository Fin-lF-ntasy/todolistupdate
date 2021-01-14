import React from 'react';
import styles from './InputTask.module.css';
import {useState} from 'react';

function InputTask({todoList, setTodoList}) {
    const [inputName, setName] = useState('');
    const addTodo = () => {
        if (inputName === '' || todoList.find(todo => todo.name === inputName)) return 
        else {
            setName('');
            setTodoList(
                [
                    {
                        name: inputName,
                        dateAdded: new Date().getTime(),
                        isDone: false,
                        isFavorite: 0,
                        dateModify: 0 
                    },...todoList
                ]
            );
         }
    }
        

    return (
        <header className={styles.heading}>
            <h1>TodoList</h1>
            <div>
                <input value = {inputName} type="text" placeholder="Add a task" onChange = {e => setName(e.target.value)} />
                <button type="button" onClick = {() => addTodo()}>Add</button>
            </div>
        </header>
        
    );
}

export default InputTask;

