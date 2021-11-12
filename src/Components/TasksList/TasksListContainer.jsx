import TasksList from "./TasksList";
import React from "react";
import {connect} from "react-redux";
import {changeTaskText, deleteTask, setIsDode, setTasks} from "../../Redux/Reducers/TasksListReducer";


let mapStateToProps = (state) => {
    return {
        tasks: state.tasksList.tasks,
    }
}

class TasksListContainer extends React.Component {

    componentDidMount() {
        this.props.setTasks(JSON.parse(localStorage.getItem("tasks")))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem("tasks", JSON.stringify(this.props.tasks))
    }

    onChangeTaskText = (id, text) => {
        this.props.changeTaskText(id, text)
    }

    onSetIsDone = (id, isDone) => {
        this.props.setIsDode(id, isDone)
    }

    onDeleteTask = (id) => {
        this.props.deleteTask(id)
    }

    render() {
        return <TasksList tasks = {this.props.tasks} onSetIsDone = {this.onSetIsDone} onChangeTaskText = {this.onChangeTaskText} onDeleteTask={this.onDeleteTask}/>
    }
}

export default connect(mapStateToProps, {setTasks, deleteTask, setIsDode, changeTaskText})(TasksListContainer)

