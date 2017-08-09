import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    let stateKey = event.target.name
    this.setState({[stateKey]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
