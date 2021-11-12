import React from "react"
import s from './TasksList.module.css';
import Task from "./Task/Task";


const TasksList = ({tasks, ...props}) => {
    const tasksItems = tasks.map((t) => <Task onDeleteTask={props.onDeleteTask} key={t.id} id={t.id} text={t.text}
                                              date={t.date} time={t.time} isDone={t.isDone} onSetIsDone = {props.onSetIsDone}
                                              onChangeTaskText = {props.onChangeTaskText}/>)

    return (
        <div className={s.container}>
            {tasksItems.length < 1 ? <h2 className={s.tasksCount}>Now you have no tasks</h2> :
                <h2 className={s.tasksCount}>Now you have {tasksItems.length} tasks</h2>}
            <div className={s.tasksBar}>{tasksItems}</div>
        </div>
    )
}

export default TasksList