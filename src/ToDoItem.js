import React, {useState} from 'react';
import './Main.css';

function ToDoItem(props) {

    const [editMode, setEditMode] = useState(false);
    const [editTaskTitle, setEditTaskTitle] = useState(props.item.title);

    const onTaskEditSave = () => {
        props.taskEditSave(props.item.id, editTaskTitle);
        setEditMode(false);
    }

    return (
        <div className="ToDoItem">
            <button onClick={() => props.onTaskMove(props.item.id, 'up')}>UP</button>
            <button onClick={() => props.onTaskMove(props.item.id, 'down')}>DOWN</button>
            {editMode
                ? <>
                    <input value={editTaskTitle} onChange={(e) => setEditTaskTitle(e.target.value)}/>
                    <button onClick={onTaskEditSave}>Save</button>
                </>
                : <span className={props.item.done ? "done" : ""} onClick={() => setEditMode(true)}>{props.item.title}</span>
            }
            <button onClick={() => props.onStatusChange(props.item.id)}>{props.item.done ? 'Done' : 'ToDo'}</button>
            <button onClick={() => props.onTaskDelete(props.item.id)}>Delete</button>
        </div>
    );
}

export default ToDoItem;
