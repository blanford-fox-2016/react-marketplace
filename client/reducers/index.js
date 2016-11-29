import {combineReducers} from 'redux'
import data from './data'
import pagination from './paginations'

const rootReducer = combineReducers({
    data, pagination

})

export default rootReducer