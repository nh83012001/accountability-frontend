import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';


class Login extends React.Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault();
    this.props.loginUser(this.state, this.props.history)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} /><br/>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} /><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { loginUser })(Login);
