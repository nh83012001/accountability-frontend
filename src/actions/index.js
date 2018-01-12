import { backendUrl, headers } from '../services/Adapter';

export function loginUser(loginData, history) {
  return (dispatch) => {
    return fetch(`${backendUrl}/auth`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(loginData)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({ type: 'AUTHORIZE_USER', payload: data })
        history.push('/')
      })
  }
}

export function signupUser(signupData, history) {
  return (dispatch) => {
    return fetch(`${backendUrl}/users`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(signupData)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({ type: 'AUTHORIZE_USER', payload: data })
        history.push('/')
      })
  }
}
