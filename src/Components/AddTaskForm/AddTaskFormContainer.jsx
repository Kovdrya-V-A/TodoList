import AddTaskForm from "./AddTaskForm";
import {connect} from "react-redux";
import {addTask} from "../../Redux/Reducers/TasksListReducer";
import React from "react";

let mapStateToProps = (state) => {
    return {}
}

class AddTaskFormContainer extends React.Component {
    componentDidMount() {
    }

    onAddTask = (text, dateTime) => {
        this.props.addTask(text, dateTime)
    }

    render() {
        return <AddTaskForm onAddTask={this.onAddTask}/>
    }
}

export default connect(mapStateToProps, {addTask})(AddTaskFormContainer)