import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textbox: '',
    };
  }

  handleTextBox = (event) => {
    this.setState({
      textbox: event.target.value
    })
  }

  isValidPoem = () => {
    let lines = this.state.textbox.split(/\n/)
    debugger
    if (
      (lines.length === 3) &&
      (lines[0].trim().split(/ +/).length === 5) &&
      (lines[1].trim().split(/ +/).length === 3) &&
      (lines[2].trim().split(/ +/).length === 5)
    ){
      return true
    }else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.textbox}
          onChange={this.handleTextBox}
        />
        {(this.isValidPoem()) ? null :
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
         }
      </div>
    );
  }
}

export default PoemWriter;
