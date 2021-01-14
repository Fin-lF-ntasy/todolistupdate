import styles from "./App.module.css";
import {getOriginList} from "./OriginList";
import CompletedTask from "./components/CompletedTask";
import UncompletedTask from "./components/UncompletedTask";
import InputTask from "./components/InputTask";
import {useState} from 'react';

const TODOLIST = getOriginList();

function App() {
  const [todoList, setTodoList] = useState(TODOLIST);
  const setNewtodo = (name, isDone) => {
    todoList.find(todo => todo.name === name).isDone = !isDone;
    todoList.find(todo => todo.name === name).dateModify = new Date().getTime();
    setTimeout(function() {
      setTodoList([...todoList]);
    }, 200);
  }

  const setFavorite = (name, setStarStyle) => {
    todoList.find(todo => todo.name === name).isFavorite = 
    (todoList.find(todo => todo.name === name).isFavorite === 0) ? 1 : 0;
    todoList.find(todo => todo.name === name).dateModify = new Date().getTime();
    setStarStyle((todoList.find(todo => todo.name === name).isFavorite === 0) 
    ? {fontSize: '16px', color: '#d9d9d9'} : {fontSize: '16px', color: '#ffcc00'}
    ); 
    setTimeout(function() {
      setTodoList([...todoList]);
    }, 200);
  }

  return (
    <div className = {styles.App}>
      <InputTask 
        todoList = {todoList}
        setTodoList = {setTodoList}
      />
      <UncompletedTask 
        todoList = {todoList}
        setTodoList = {setTodoList}
        setNewtodo = {setNewtodo}
        setFavorite = {setFavorite}
      />
      <CompletedTask 
        todoList = {todoList}
        setTodoList = {setTodoList}
        setNewtodo = {setNewtodo}
        setFavorite = {setFavorite}
      />
    </div>
  );

}

export default App;
