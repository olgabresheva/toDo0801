import React, {useState} from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function ToDoCreateForm(props) {

    const [taskNameInput, setTaskNameInput] = useState('')
    const [taskDescriptionInput, setTaskDescriptionInput] = useState('')
    const [addTaskDisabled, setAddTaskDisabled] = useState(true);

    //function for task creation and controlling of button being active/disabled
    const newTaskDescriptionInput = (e) => {
        setTaskDescriptionInput(e.target.value);
        (taskDescriptionInput.length > 2) ? setAddTaskDisabled(false) : setAddTaskDisabled(true);
    }

    const addNewTask = (e) => {
        props.onNewTaskAdd(taskNameInput, taskDescriptionInput);
        setTaskNameInput('');
        setTaskDescriptionInput('')
        e.preventDefault();
        setAddTaskDisabled(true)
    }

    return (
        <div>
            <label htmlFor="exampleFormControlInput1"><strong>Your To Do List</strong></label><br/>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control form-control-sm" value={taskNameInput}
                               placeholder="Enter Task Name"
                               onChange={e => setTaskNameInput(e.target.value)}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control form-control-sm" value={taskDescriptionInput}
                               placeholder="Enter Task Description"
                               onChange={newTaskDescriptionInput}/>
                    </div>
                </div>
                <div className="row">
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
