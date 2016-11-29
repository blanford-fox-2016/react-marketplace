import {
    LOAD_PHONEBOOKS_SUCCESS, LOAD_DATA
} from '../constants/ActionTypes'

const initialState = [
    {active: true, label: 1}
]

export default function pagination(state = initialState, action) {
    switch(action.type) {

        case LOAD_PHONEBOOKS_SUCCESS:
            console.log("ini load data di reducers: ", action.response.pagination)
            return action.response.pagination

        case LOAD_DATA:
            return initialState

        default:
            return state
    }
}