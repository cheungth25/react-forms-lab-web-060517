import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      count: props.maxChars,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      count: this.state.count - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>Characters left: {this.state.count}</p>
      </div>
    );
  }
}

export default TwitterMessage;
