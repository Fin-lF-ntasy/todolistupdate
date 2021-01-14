import React from 'react';
import {useState} from 'react';
import styles from './TodoItem.module.css';
import {StarFilled} from '@ant-design/icons';

function TodoItem({name, isDone, isFavorite, setNewtodo, setFavorite}) {
    const [checkbox, setcheckbox] = useState(isDone);
    
    const STAR = () => 
        (isFavorite === 1) ? {fontSize: '16px', color: '#ffcc00'} : {fontSize: '16px', color: '#d9d9d9'};
        const [star, setStarStyle] = useState(STAR());
    
    return (
        <li className = {styles.TodoItem}>
            <div>
                <input type="checkbox" checked = {checkbox} onClick = {() => setNewtodo(name, isDone)} onChange = {event => setcheckbox(event.target.checked)} />
                <span>{name}</span>
            </div>
            <span className={styles.star} onClick = {() => setFavorite(name, setStarStyle)}><StarFilled style = {star}/></span>
            
        </li>
    );
}

export default TodoItem;    