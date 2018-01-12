import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';


class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      description: "",
      link1: "",
      link2: "",
      blog: "",
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault();
    this.props.signupUser({user: this.state}, this.props.history)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={this.state.name} onChange={this.handleChange} /><br/>
          <input name="description" type="description" value={this.state.description} onChange={this.handleChange} /><br/>
          <input name="link1" type="link1" value={this.state.link1} onChange={this.handleChange} /><br/>
          <input name="link2" type="link2" value={this.state.link2} onChange={this.handleChange} /><br/>
          <input name="blog" type="blog" value={this.state.blog} onChange={this.handleChange} /><br/>
          <button type="submit">SignUp</button>
        </form>
      </div>
    )
  }
}



export default connect(null, { signupUser })(Task);
