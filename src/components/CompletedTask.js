import React from "react";
import TodoItem from './TodoItem';
import styles from './CompletedTask.module.css';

function CompletedTask({todoList, setNewtodo, setFavorite}) {
  const renderCompleted = () =>
    todoList.filter(todo => todo.isDone === true).sort((a,b) => b.dateModify - a.dateModify).sort((a,b) => b.isFavorite - a.isFavorite).map(todo => 
        <TodoItem 
          name = {todo.name}
          dateAdded = {todo.dateAdded}
          dateModify = {todo.dateModify}
          isDone = {todo.isDone}
          isFavorite = {todo.isFavorite}
          key = {todo.name}
          setNewtodo ={setNewtodo}
          setFavorite = {setFavorite}
        />
      );

  return (
    <section className={styles.completed}>
      <h3> Completed Task</h3>
      <ul>
        {renderCompleted()}
      </ul>
    </section>
  );
}

export default CompletedTask;
