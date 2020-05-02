import { API } from '../../backend'

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

export const authenticate = (data, next) => {
    if (typeof Window !== undefined) {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signout = next => {
    if (typeof Window !== undefined) {
        localStorage.removeItem('jwt')
    }
    next()
    return fetch(`${API}/signout`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

export const getUserToken = next => {
    if (typeof Window == undefined) {
        return false
    }
    let token = localStorage.getItem('jwt')
    if (token) {
        return JSON.parse(token)
    } else {
        return false
    }
}

export const isAuthenticated = next => {
    return getUserToken() ? true: false
}