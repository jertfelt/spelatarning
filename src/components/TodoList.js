import ToDo from './Todo';

const ToDoList = ({toDoList, handleToggle, handleFilter,handleSort}) => {
    return (
        <div className="padding">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} 
                    handleToggle={handleToggle} 
                    handleFilter={handleFilter}
                    // handleSort={handleSort}
                    />
                )
            })}
            <button 
            className="todo__clear"
            style={{margin: '10px'}
            } 
            onClick={handleFilter}>
              Rensa färdiga
            </button>
            {/* <button className="todo__clear"
            onClick={handleSort}
            >Sortera</button> */}
        </div>
    );
};

export default ToDoList;