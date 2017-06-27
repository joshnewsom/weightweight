import React from 'react';

class SignInOutUp extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div style={buttonContainerStyle}>
        <SignInButton bird/>
        <SignUpButton/>
      </div>
    )
  }
}

export default SignInOutUp;


class SignInButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: buttonStyle};

    this.handleClick = handleClick.bind(this);
    this.handleMouseEnter = handleMouseEnter.bind(this);
    this.handleMouseLeave = handleMouseLeave.bind(this);
  }

  render() {
    return (
      <button style={this.state.style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}>Sign In</button>
    )
  }
}

class SignUpButton extends SignInButton {
  render() {
    return (
      <button style={this.state.style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}>Sign Up</button>
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
function handleMouseEnter() {
  let newStyle = Object.assign({}, this.state.style, {backgroundColor: 'white'});
  this.setState({
    style: newStyle
  });
}

function handleMouseLeave() {
  let newStyle = Object.assign({}, this.state.style, {backgroundColor: 'gray'});
  this.setState({
    style: newStyle
  });
}

function handleClick() {
  console.log('CLICK');
}
