import React from 'react';

class SignInOutUp extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div style={buttonContainerStyle}>
        <Button text="Sign In" onClick={onClick}/>
        <Button text="Sign Up" onClick={onClick}/>
        <Button text="Sign Out" onClick={onClick} hidden/>
      </div>
    )
  }
}

export default SignInOutUp;


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: buttonStyle};

    this.onClick = this.props.onClick.bind(this);
    this.onMouseEnter = onMouseEnter.bind(this);
    this.onMouseLeave = onMouseLeave.bind(this);
  }

  render() {
    if (this.props.hidden) return null;
    else return (
      <button style={this.state.style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}>{this.props.text}</button>
    )
  }
}

// Styles
const buttonContainerStyle = {
  border: '1px dotted black',
  height: '80%',
  right: '10px',
  position: 'absolute',
  top: '10%'
},
buttonStyle = {
  backgroundColor: 'gray',
  border: '1px solid black',
  borderRadius: '8px',
  height: '100%',
  position: 'relative',
  padding: '0 25px'
},
buttonStyleLeft = Object.assign({}, buttonStyle, {marginRight: '15px'});


// Hoisted Functions
function onMouseEnter() {
  let newStyle = Object.assign({}, this.state.style, {backgroundColor: 'white'});
  this.setState({
    style: newStyle
  });
}

function onMouseLeave() {
  let newStyle = Object.assign({}, this.state.style, {backgroundColor: 'gray'});
  this.setState({
    style: newStyle
  });
}

function onClick() {
  console.log('CLICK');
}
