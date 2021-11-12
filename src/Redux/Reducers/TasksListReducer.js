const SET_TASKS = "SET_TASKS"
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK_TASK";
const SET_IS_DODE = "SET_IS_DODE";
const CHANGE_TASK_TEXT = "CHANGE_TASK_TEXT";

const initialState = {
    tasks: [],
}

const TasksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case ADD_TASK: {
            if (state.tasks.find((t) => t.text === action.text && t.date === action.date && t.time === action.time)) {
                alert("У вас уже есть такая запись!")
                break;
            }

            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }

            let id = getRandomInt(10000)
            let newTask = {id: id, text: action.text, date: action.date, time: action.time, isDone: false}
            return {
                ...state,
                tasks: [newTask, ...state.tasks]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.id
                )
            }
        }
        case SET_IS_DODE: {
            return {
                ...state,
                tasks: state.tasks.map(t => {
                        if (t.id === action.id) {
                            return {...t, isDone: action.isDone}
                        }
                        return t
                    }
                )
            }
        }
        case CHANGE_TASK_TEXT: {
            return {
                ...state,
                tasks: state.tasks.map(t => {
                        if (t.id === action.id) {
                            return {...t, text: action.text}
                        }
                        return t
                    }
                )
            }
        }
    }
    return state
}

export const setTasks = (tasks) => {
    return {
        type: SET_TASKS,
        tasks
    }
}

export const addTask = (text, dateTime) => {
    let separatedDate = dateTime.split('T')
    return {
        type: ADD_TASK,
        text: text,
        date: separatedDate[0],
        time: separatedDate[1]
    }
}

export const setIsDode = (id, isDone) => {
    return {
        type: SET_IS_DODE,
        id,
        isDone
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
}
export const changeTaskText = (id, text) => {
    return {
        type: CHANGE_TASK_TEXT,
        id,
        text
    }
}

export default TasksListReducer;