import React from 'react';
import './Main.css';
import ToDoItem from "./ToDoItem";


function ToDoList(props) {
    return (
        <div className="ToDoList">
            <ul className="list-unstyled">
                {props.list.map(el => <li key={el._id}>
                    <ToDoItem item={el}
                              onTaskDelete={props.onTaskDelete}
                              onStatusChange={props.onStatusChange}
                              onTaskEditSave={props.onTaskEditSave}
                              taskEditSave={props.taskEditSave}
                              onTaskMove={props.onTaskMove}/>
                </li>)}
            </ul>


        </div>
    );
}

export default ToDoList;
