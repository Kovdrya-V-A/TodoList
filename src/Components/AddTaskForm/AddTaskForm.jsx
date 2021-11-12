import React, {createRef, useState} from "react"
import s from './AddTaskForm.module.css';

const AddTaskForm = ({onAddTask}) => {

    let [taskText, setText] = useState("")
    let [selectedDateTime, setDateTime] = useState("")

    let onSetText = (e) => {
        setText(e.target.value)
    }
    let onSetDateTime = (e) => {
        setDateTime(e.target.value)
    }

    return (
        <div className={s.container}>
            <h4>Add your task</h4>
            <textarea value={taskText} onChange={onSetText} name="interTask" rows="5"/>
            <input value={selectedDateTime}
                   onChange={onSetDateTime}
                   type="datetime-local"/>
            <button onClick={() => taskText && selectedDateTime ? onAddTask(taskText, selectedDateTime): alert("Заполните все поля!")}>Add new task</button>
        </div>
    )
}


export default AddTaskForm;