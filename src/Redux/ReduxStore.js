import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import TasksListReducer from "./Reducers/TasksListReducer";

const enchansers = [
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]

const reducers = combineReducers({
    tasksList: TasksListReducer,
})

export const store = createStore(reducers, compose(...enchansers))