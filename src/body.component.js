import React from 'react';

import SignUpForm from './users/sign-up-form.component';
import SignInForm from './users/sign-in-form.component';


class Body extends React.Component {
  render() {
    return (
      <section style={bodyStyle}>
        Body
        <SignUpForm appState={this.props.appState}/>
        <SignInForm appState={this.props.appState}/>
      </section>
    )
  }
}

export default Body;

// Styles
const bodyStyle = {
  bottom: '30px',
  overflow: 'auto',
  position: 'absolute',
  top: '50px',
  width: '100%'
};
