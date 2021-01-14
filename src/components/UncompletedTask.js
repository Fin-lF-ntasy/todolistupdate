import React from "react";
import TodoItem from './TodoItem';
import styles from './UncompletedTask.module.css';

function UncompletedTask({todoList, setNewtodo, setFavorite}) {
  const renderUncompleted = () =>
    todoList.filter(todo => todo.isDone === false).sort((a,b) => b.dateModify - a.dateModify).sort((a,b) => b.dateAdded - a.dateAdded).sort((a,b) => b.isFavorite - a.isFavorite).map(todo => 
      <TodoItem 
        name = {todo.name}
        dateAdded = {todo.dateAdded}
        dateModify = {todo.dateModify}
        isDone = {todo.isDone}
        isFavorite = {todo.isFavorite}
        key = {todo.name}
        setNewtodo = {setNewtodo}
        setFavorite = {setFavorite}
      />
    );

  return (
    <section className={styles.uncompleted}>
      <h3>Task List</h3>
      <ul>
        {renderUncompleted()}
      </ul>
    </section>
  );
}

export default UncompletedTask;
