import React from 'react';

import SignUpForm from './sign-up-form.component';
import SignInForm from './sign-in-form.component';


class AuthFormContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.title);
    this.state = { style: AuthFormContainerStyle };
  }

  render() {
    let form = this.props.title === 'Sign Up' ? <SignUpForm/> : <SignInForm/>
    return (
      <form style={this.state.style}>
        <h1 style={{textAlign: 'center'}}>{this.props.title}</h1>
        {form}
      </form>
    )
  }
}

const AuthFormContainerStyle = {
  border: '5px solid black',
  borderRadius: '8px',
  boxShadow: '3px 7px 5px rgba(0,0,0,.3 )',
  height: '90%',
  left: '5%',
  position: 'absolute',
  transition: '.25s',
  WebkitTransition: '1s',
  top: '5%',
  width: '90%'
}

export default AuthFormContainer;
