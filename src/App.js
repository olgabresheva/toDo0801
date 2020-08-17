import React, {useEffect, useState} from 'react';
import './Main.css';
import ToDoCreateForm from "./ToDoCreateForm";
import ToDoList from "./ToDoList";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

function App() {

    const [list, setList] = useState([]);

    const getFullList = () => {
        axios({
            url: 'https://to-do-app-trial.herokuapp.com/todo',
            method: 'GET',
        })
            .then(res => {
                setList(res.data)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        getFullList();
    }, []);

    const onTaskDelete = (id) => {
        axios({
            url: `https://to-do-app-trial.herokuapp.com/todo/${id}`,
            method: 'DELETE',
        })
            .then(res => {
                getFullList()
            })
            .catch(e => console.log(e))
    };

    // const onTaskDelete = (id) => {
    //     const updatedList = list.filter(el => el.id !== id);
    //     setList(updatedList);
    // }


    const onNewTaskAdd = (name, description) => {
        axios({
            url: 'https://to-do-app-trial.herokuapp.com/todo',
            method: 'POST',
            data: {name, description}
        })
            .then(res => {
                getFullList()
            })
            .catch(e => console.log(e))
    };

    // const onNewTaskAdd = (title, description) => {
    //     const updatedList = [...list];
    //     updatedList.push({id: uuid(), name: title, description: description, done: false});
    //     setList(updatedList);
    // }

    const onStatusChange = (id, state) => {
        axios({
            url: `https://to-do-app-trial.herokuapp.com/todo/${id}`,
            method: 'PUT',
            data: {done: !state},
        })
            .then(res => {
                getFullList()
            })
            .catch(e => console.log(e))
    }

    // const onStatusChange = (id) => {
    //     const updatedList = list.map(el => {
    //         if (el.id === id) {
    //             return ({...el, done: !el.done})
    //         } else return el
    //     })
    //     setList(updatedList);
    // }

    const taskEditSave = (id, newTitle, newDesc) => {
        axios({
            url: `https://to-do-app-trial.herokuapp.com/todo/${id}`,
            method: 'PATCH',
            data: {name: newTitle, description: newDesc}
        })
            .then(res => {
                getFullList()
            })
            .catch(e => e.target.value)
    }

    // const taskEditSave = (id, newTitle, newDesc) => {
    //     const updatedList = list.map(el => {
    //         if (el.id === id) {
    //             return ({...el, name: newTitle, description: newDes})
    //         } else return el;
    //     })
    //     setList(updatedList);
    // }

    //function which changes array element location based on given direction
    const onTaskMove = (id, direction) => {
        let i = list.findIndex(el => el.id === id);
        let updatedList;
        updatedList = [...list];
        if (direction === 'up') {
            if (i !== 0) {
                updatedList.splice(i - 1, 0, updatedList.splice(i, 1)[0]);
            }
        }
        if (direction === 'down') {
            updatedList.splice(i + 1, 0, updatedList.splice(i, 1)[0])
        }
        setList(updatedList);
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
