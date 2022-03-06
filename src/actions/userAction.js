export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'


export function addUserAction(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const authUser = (token) => (dispatch) => {
    // const token = localStorage.getItem('token')
    // if (token) {
        fetch("http://localhost:8080/cvbank/employee/login", {
            method: 'post',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
            .then(data => data.json())
            .then(data => {
                dispatch(addUserAction(data))
            })
    // }
}