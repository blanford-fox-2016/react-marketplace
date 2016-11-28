import * as types from '../constants/ActionTypes'
import request from 'superagent'

const SERVER_URL = 'http://localhost:8000/api/phonebooks'

export function addData(id, name, price, description, image) {
    return {type: types.ADD_DATA, id, name, price, description, image}
}


export function loadData() {
    return {type: types.LOAD_DATA}
}

export function loadPhoneBooksSuccess(phonebooks) {
    return {type: types.LOAD_PHONEBOOKS_SUCCESS, phonebooks}
}

export function loadPhoneBooksFailure() {
    return {type: types.LOAD_PHONEBOOKS_FAILURE}
}

export function loadPhoneBooks() {
    return dispatch => {
        dispatch(loadData())
        return request
            .get(SERVER_URL)
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(loadPhoneBooksFailure())
                }
                else {
                    console.log("ini body: ", res.body)
                    dispatch(loadPhoneBooksSuccess(res.body))
                }
            })
    }
}

export function addPhoneBookFailure() {
    return {type: types.ADD_PHONEBOOKS_FAILURE}
}

export function addPhoneBookSuccess(phonebook) {
    console.log("add succes: ", phonebook)
    return {type: types.ADD_PHONEBOOKS_SUCCESS, phonebook}
}

export function addPhoneBook(id, name, price, description, image) {
    return dispatch => {
        dispatch(addData(id, name, price, description, image))
        return request
            .post(SERVER_URL)
            .type('form')
            .send({
                id: id,
                name: name,
                price: price,
                description: description,
                image: image
            })
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    dispatch(addPhoneBookFailure())
                }
                else {
                    dispatch(addPhoneBookSuccess(res.body))
                }
            })
    }
}