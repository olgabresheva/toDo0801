import React, {useState} from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function ToDoCreateForm(props) {

    const [newTaskInput, setNewTaskInput] = useState('')
    const [addTaskDisabled, setAddTaskDisabled] = useState(true);

    //function for task creation and controlling of button being active/disabled
    const taskInput = (e) => {
        setNewTaskInput(e.target.value);
        (newTaskInput.length > 2) ? setAddTaskDisabled(false) : setAddTaskDisabled(true);
    }

    const addNewTask = (e) => {
        props.onNewTaskAdd(newTaskInput);
        setNewTaskInput('');
        e.preventDefault();
        setAddTaskDisabled(true)
    }

    return (
        <div>
            <label htmlFor="exampleFormControlInput1"><strong>Your To Do List</strong></label><br/>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control form-control-sm" value={newTaskInput}
                               onChange={taskInput}/>
                    </div>
                    <div className="col">
                        <button disabled={addTaskDisabled} type="submit" className="btn btn-info btn-sm"
                                onClick={addNewTask}>Add Task
                        </button>
                    </div>
                </div>
            </form>
            <span> </span>
        </div>
    );
}

export default ToDoCreateForm;
