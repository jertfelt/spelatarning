import { useState } from "react";
import ToDoList from "../components/TodoList";
import data from "../data/todos.json";
import ToDoForm from '../components/ToDoForm';

const Home = () => {
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

  //? här ska jag lägga in, tillsammans med korrigering i data, att man kan sortera efter prioritet
  // const handleSort = () => {
  //   let sorted = toDoList.sort((a, b) => a.task.localeCompare(b.task));
  //   setToDoList(sorted)
  // }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return ( 
    <div className="content__todo">
    <h2>Att göra:</h2>
  <ToDoList toDoList={toDoList} 
  handleToggle={handleToggle} 
  handleFilter={handleFilter}
  // handleSort={handleSort}
  />
  <ToDoForm addTask={addTask}/>
  </div>
   );
}
 
export default Home;