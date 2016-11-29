import {
    ADD_DATA,
    DELETE_DATA,
    EDIT_DATA,
    LOAD_PHONEBOOKS_SUCCESS,
    LOAD_PHONEBOOKS_FAILURE,
    LOAD_DATA,
    ADD_PHONEBOOKS_SUCCESS,
    ADD_PHONEBOOKS_FAILURE,
} from '../constants/ActionTypes'

const initialState = []

export default function data(state = initialState, action) {
    switch(action.type) {

        case LOAD_DATA:
            return []

        case LOAD_PHONEBOOKS_SUCCESS:
            console.log("ini load data di reducers: ", action.response.data)
            return action.response.data

        case ADD_DATA:
            return [
                ...state,
                {
                    dataId: action.dataId,
                    name: 'temp',
                    price: action.price,
                    description: action.description,
                    image: action.image,
                    fake: true
                },
            ]

        case ADD_PHONEBOOKS_SUCCESS:
            // console.log("ini state: ", state)
            // console.log("ini action: ", action)

            let idObjects = state.map(function (x) {
                // console.log("ini x: ", x)
                return x.id
            })

            // console.log("ini id objects: ", idObjects)
            let idObject = idObjects.indexOf(action.phonebook.id)

            // console.log("ini id object: ", idObject)
            if (idObject > -1) {
                let newData = state.filter((data) => {
                    return data.fake != true
                })
                return [...newData, action.phonebook]
            }
            else {

                return [...state, action.phonebook]
            }

        case LOAD_PHONEBOOKS_FAILURE:
        case ADD_PHONEBOOKS_FAILURE:
            return state

        // case SEARCH_DATA:
        //     return state.filter((data) => {
        //         console.log(action.name)
        //         return data.name.startsWith(action.name)
        //     })
        default:
            return state
    }
}