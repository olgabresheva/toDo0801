import React, {useState} from 'react';
import './Main.css';
import ToDoCreateForm from "./ToDoCreateForm";
import ToDoList from "./ToDoList";
import {uuid} from "uuidv4";
import 'bootstrap/dist/css/bootstrap.min.css'

const initialList = [
    {id: 1, title: 'Task 1', done: true},
    {id: 2, title: 'Task 2', done: false},
    {id: 3, title: 'Task 3', done: true},
];

function App() {

    const [list, setList] = useState(initialList);

    const onNewTaskAdd = (title) => {
        const updatedList = [...list];
        updatedList.push({id: uuid(), title: title, done: false});
        setList(updatedList);
    }

    const onTaskDelete = (id) => {
        const updatedList = list.filter(el => el.id !== id);
        setList(updatedList);
    }

    const onStatusChange = (id) => {
        const updatedList = list.map(el => {
            if (el.id === id) {
                return ({...el, done: !el.done})
            } else return el
        })
        setList(updatedList);
    }

    const taskEditSave = (id, newTitle) => {
        const updatedList = list.map(el => {
            if (el.id === id) {
                return ({...el, title: newTitle})
            } else return el;
        })
        setList(updatedList);
    }

    const onTaskMove = (id, direction) => {
        let i = list.findIndex(el => el.id === id);
        let updatedList;
        if (i >= 0) {
            updatedList = [...list];
            if (direction === 'up') {
                updatedList.splice(i - 1, 0, updatedList.splice(i, 1)[0]);
            }
            if (direction === 'down') {
                updatedList.splice(i + 1, 0, updatedList.splice(i, 1)[0])
            }
            setList(updatedList);
        }
    }

    return (
        <div className="container">
            <ToDoCreateForm onNewTaskAdd={onNewTaskAdd}/>
            <hr/>
            <ToDoList list={list}
                      onTaskDelete={onTaskDelete}
                      onStatusChange={onStatusChange}
                      taskEditSave={taskEditSave}
                      onTaskMove={onTaskMove}/>
        </div>
    );
}

export default App;
