import React from 'react';


class Login extends React.Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = () => {
    
  }

  render() {
    return (
      <div>
        <form>
          <input />
          <input type="password"/>
          <button type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;
