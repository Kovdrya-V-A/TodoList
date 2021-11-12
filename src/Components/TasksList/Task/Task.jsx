import React, {createRef, useState} from "react";
import s from "./Task.module.css"
import {setIsDode} from "../../../Redux/Reducers/TasksListReducer";

const Task = ({text, date, time, id, onDeleteTask, isDone, onSetIsDone, onChangeTaskText}) => {
    let [editMode, toggleEditMode] = useState(false)
    let [currentText, setText] = useState(text)
    let [currentDone, setDone] = useState(isDone)


    let activateEditMode = () => {
        toggleEditMode(true)
    }
    let deactivateEditMode = () => {
        toggleEditMode(false)
    }

    let onTaskTextChange = (e) => {
        setText(e.currentTarget.value)
    }

    let onSetNewText = () => {
        deactivateEditMode()
        onChangeTaskText(id, currentText)
    }

    let onSetDone = (e) => {
        setDone(e.currentTarget.checked)
        onSetIsDone(id, e.currentTarget.checked)
    }

    return (
        <div className={s.container}>
            <div className={s.taskInfo}>
                <div className={s.taskText}>{!editMode ?
                    <span className={!isDone ? s.text : s.done} onDoubleClick={activateEditMode}>{currentText}</span> :
                    <textarea onChange={onTaskTextChange} autoFocus={true}
                              onBlur={onSetNewText}
                              className={s.inputNewText}
                              value={currentText}>
                    </textarea>}
                </div>
                <div className={s.taskDate}>
                    <span className={s.date}>{date}</span>
                    <span className={s.time}>{time}</span>
                </div>
            </div>
            <div className={s.activityBar}>
                <span onClick={() => onDeleteTask(id)} className={s.delete}><img src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-450x450.png" alt="Delete"/></span>
                <input checked={currentDone} onChange={onSetDone} type="checkbox"/>
                {currentDone ? <span className={s.doneStatus}>Done</span>: <span className={s.inProgressStatus}>During</span>}
            </div>
        </div>
    )
}

export default Task