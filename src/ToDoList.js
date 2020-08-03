import React from 'react';
import './Main.css';
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    return (
        <div className="ToDoList">
            {props.list.map(el => <div key={el.id}>
                <ToDoItem item={el}
                          onTaskDelete={props.onTaskDelete}
                          onStatusChange={props.onStatusChange}
                          onTaskEditSave={props.onTaskEditSave}
                          taskEditSave={props.taskEditSave}
                          onTaskMove={props.onTaskMove}/>
            </div>)}


        </div>
    );
}

export default ToDoList;
