import Dice from "./views/Dice";
import Header from "./Header";
import { useState } from "react";
import ToDoList from "./TodoList";
import data from "./data/todos.json";
import ToDoForm from './ToDoForm';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <div className="content__main">
        <div className="content__todo">
          <h2>Att göra:</h2>
        <ToDoList toDoList={toDoList} 
        handleToggle={handleToggle} 
        handleFilter={handleFilter}/>
        <ToDoForm addTask={addTask}/>
        </div>
        
      <div className="content__other">
      <h3>Feeling lucky, punk?</h3>
      <p>Om du lyckas slå siffran 12 så vinner du ett pris!</p> 
      <div><Dice /></div>
      </div>
      </div>

    </div>
  );
}

export default App;
