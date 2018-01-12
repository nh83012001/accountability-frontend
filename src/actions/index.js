import { backendUrl, headers } from '../services/Adapter';

export function loginUser(loginData, history) {
  console.log(loginData);
  return (dispatch) => {
    return fetch(`${backendUrl}auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
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
  console.log(signupData);
  return (dispatch) => {
    return fetch(`${backendUrl}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
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
