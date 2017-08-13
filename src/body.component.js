import React from 'react';

import SignUpForm from './users/sign-up-form.component';
import SignInForm from './users/sign-in-form.component';
import AuthFormContainer from './users/auth-form-container.component';

class Body extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let title = this.props.appState.showForm === 'Sign Up'
			? 'Sign Up'
			: 'Sign In'

		return (
			<section style={bodyStyle}>
				<AuthFormContainer appState={this.props.appState} title={title}/>
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
