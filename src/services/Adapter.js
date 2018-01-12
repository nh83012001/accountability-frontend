export const backendUrl = "http://localhost:3001/"

export const headers = () => {
  return {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token'),
  }
}
