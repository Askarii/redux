import { combineReducers, createStore } from 'redux'
import counterReducer from './ducks/counterReducer'

const reducer = combineReducers({
    counter: counterReducer
})
const store = createStore(reducer);


export default store