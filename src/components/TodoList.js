import ToDo from './Todo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className="padding">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} 
                    handleToggle={handleToggle} 
                    handleFilter={handleFilter}/>
                )
            })}
            <button 
            className="todo__clear"
            style={{margin: '10px'}
            } 
            onClick={handleFilter}>
              Rensa färdiga
            </button>
        </div>
    );
};

export default ToDoList;