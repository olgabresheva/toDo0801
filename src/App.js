import React, {useState} from 'react';
import './Main.css';
import ToDoCreateForm from "./ToDoCreateForm";
import ToDoList from "./ToDoList";
import {uuid} from "uuidv4";

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
            if(el.id === id){return ({...el, done: !el.done})}
            else return el
        })
        setList(updatedList);
    }

    const taskEditSave = (id, newTitle) => {
        const updatedList = list.map(el => {
            if(el.id === id){return ({...el, title: newTitle})}
            else return el;
        })
        setList(updatedList);
    }

    const onTaskMove = (id, direction) => {
        // let i = list.findIndex(el => el.id === id);
        // console.log(i);
        // let newIndex;
        // let updatedList;
        // // if(direction === 'up'){newIndex = i - 1;}
        // //    else if(direction === 'down'){newIndex = i + 1;}
        // // const updatedList = list.splice(newIndex, 0, list[i]);
        // if(direction === 'up'){
        //     updatedList = list.splice(i-1, 0, list[i])
        // }
        // if(direction === 'down'){
        //     updatedList = list.splice(i+1, 0, list[i])
        // }
        // setList(updatedList);
    }

    return (
        <div className="App">
            <ToDoCreateForm onNewTaskAdd={onNewTaskAdd}/>
            <ToDoList list={list}
                      onTaskDelete={onTaskDelete}
                      onStatusChange={onStatusChange}
                      taskEditSave={taskEditSave}
                      onTaskMove={onTaskMove}/>
        </div>
    );
}

export default App;
