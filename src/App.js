import React, {createRef} from "react"
import s from './App.module.css';
import Header from "./Components/Header/Header";
import {store} from "./Redux/ReduxStore";
import {Provider} from "react-redux";
import TasksListContainer from "./Components/TasksList/TasksListContainer";
import AddTaskFormContainer from "./Components/AddTaskForm/AddTaskFormContainer";



function App() {

    let dateTime = createRef()

    return (
        <Provider store={store}>
            <div className={s.container}>
                <Header/>
                <AddTaskFormContainer/>
                <TasksListContainer/>
            </div>
        </Provider>
    )
}


export default App;
