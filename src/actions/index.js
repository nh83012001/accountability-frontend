import { backendUrl, headers } from '../services/Adapter';

export function loginUser(loginData, history) {
  return (dispatch) => {
    return fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(loginData)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch({ type: 'LOGIN_USER', payload: data })
        history.push('/')
      })
  }
}
