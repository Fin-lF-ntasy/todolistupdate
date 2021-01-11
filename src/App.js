import "./App.css";
import CompletedTask from "./components/CompletedTask";
import UncompletedTask from "./components/UncompletedTask";
import {getOriginList} from './OriginList'
import {useState} from 'react';

const TODOLIST = getOriginList();

function App() {
  const [newTask, setNewtask] = useState('');
  const [todoLists, setTodoList] = useState(TODOLIST);


  const filterUncompleted = () => todoLists.filter(todo => todo.isDone === false);
  const filterCompleted = () => todoLists.filter(todo => todo.isDone === true);

  const renderUncompletedTask = () =>
    filterUncompleted().sort((a,b) => b.isFavorite - a.isFavorite).sort((a,b) => b.dateModify- a.dateModify).map(uncompletedTask =>
      <UncompletedTask
         todo = {uncompletedTask.todo}
         isDone = {uncompletedTask.isDone}
         isFavorite = {uncompletedTask.isFavorite}
         dateAdded = {uncompletedTask.dateAdded}
         dateModify = {uncompletedTask.dateModify}
         key = {uncompletedTask.todo}
         changeFavorite = {changeFavorite}
         changeDone = {changeDone}
       />
    )

  const renderCompletedTask = () =>
    filterCompleted().sort((a,b) => b.dateModify- a.dateModify).map(completedTask =>
      <CompletedTask
        todo = {completedTask.todo}
        isDone = {completedTask.isDone}
        dateAdded = {completedTask.dateAdded}
        dateModify = {completedTask.dateModify}
        key = {completedTask.todo}
      />
    )

  const addNewTask = () => {
    if (newTask !== '')
      setTodoList(
        [...todoLists,
          {
            todo: newTask,
            dateAdded: new Date().getTime(),
            isDone: false,
            isFavorite: 0
          }
        ].sort((a, b) => b.dateAdded - a.dateAdded)
      )
  }
  const appliednewtodo = () => {
      setTodoList([...todoLists]);
      console.log(filterUncompleted().sort((a,b) => b.isFavorite - a.isFavorite));
  }



  const changeFavorite = (todo) => {
    let todoFavorite = todoLists.find(e => e.todo === todo);
    todoFavorite.isFavorite = (todoFavorite.isFavorite === 0) ? 1 : 0;
    todoFavorite.isDone = (todoFavorite.isFavorite === 1) ? false : todoFavorite.isDone;
    todoFavorite.dateModify = new Date().getTime();
    console.log(todoFavorite.isDone);
  }

  const changeDone = (todo) => {
    let todoDone = todoLists.find(e => e.todo === todo);
    todoDone.isDone = (todoDone.isDone === false) ? true : false;
    todoDone.isFavorite = (todoDone.isDone === true) ? 0 : todoDone.isFavorite;
    todoDone.dateModify = new Date().getTime();
  }



  return (
    <div className="App">
      <header className="heading">
        <h1>TodoList</h1>
        <div className="newTask">
          <input type="text" placeholder="Add a task" onChange = {event => setNewtask(event.target.value)}/>
          <button type="button" className="addTask" onClick = {() => addNewTask()}>Add</button>
        </div>
      </header>
      <section className="listTask">
        <div className="newTask">
          <h3>Task List</h3>
          <button type="button" onClick = {() => appliednewtodo()}>Apply</button>
        </div>
        <ul>
          {renderUncompletedTask()}
        </ul>
      </section>
      <div className="completed">
        <section className="listTask">
          <div className="totalComplete">
            <button className="fas fa-chevron-down"></button>
            <h3> Completed Task</h3>
          </div>
          <ul>
            {renderCompletedTask()}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
