import React from 'react';

import SignUpForm from './sign-up-form.component';

class SignInForm extends SignUpForm {
  constructor(props) {
    super(props)
    this.state.show = false;
    this.state.title = 'Sign In';
  }
}

export default SignInForm;
