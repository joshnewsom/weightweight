import React from 'react';

class SignInOutUp extends React.Component {
  render() {
    return (
      <div style={buttonContainerStyle}>
        <button style={buttonStyleLeft} onClick={() => {console.log('IN');}}>Sign In</button>
        <button style={buttonStyle} onClick={() => {console.log('UP');}}>Sign Up</button>
      </div>
    )
  }
}

export default SignInOutUp;

// Styles
const buttonContainerStyle = {
  border: '1px dotted black',
  height: '80%',
  right: '10px',
  position: 'absolute',
  top: '10%'
},
buttonStyle = {
  height: '50%',
  position: 'relative',
  top: '25%'
},
buttonStyleLeft = Object.assign({}, buttonStyle, {marginRight: '15px'});
