import React, {useState} from 'react';
import './Main.css';

function ToDoCreateForm(props) {

    const [newTaskInput, setNewTaskInput] = useState('')

    const addNewTask = () => {
        props.onNewTaskAdd(newTaskInput);
        setNewTaskInput('');
    }

    return (
        <div className="ToDoCreateForm">
            <input type="text" value={newTaskInput} onChange={(e) => setNewTaskInput(e.target.value)}/>
            <button onClick={addNewTask}>Add Task</button>
        </div>
    );
}

export default ToDoCreateForm;
