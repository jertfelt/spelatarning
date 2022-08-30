import { useState } from "react";
const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}
        className="todo__input">
            <input value={userInput} 
           
            type="text" 
            onChange={handleChange} 
            placeholder="Uppgift"/>
            <button
            >Lägg till</button>
        </form>
    );
};

export default ToDoForm;