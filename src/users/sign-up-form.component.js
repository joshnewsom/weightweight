import React from 'react';

class SignUpForm extends React.Component {
	constructor(props) {
		super();
	}

	componentWillMount() {}

	componentDidMount() {}

	submitSignupForm() {
		console.log('Submitting Sign Up Form!');
	}

	render() {
		return (
			<div style={ContainerStyle}>

				<label htmlFor="username-input">Username</label>
				<input id="username-input" name="username"/>

				<label htmlFor="username-input">Password</label>
				<input id="password-input" name="password"/>

				<label htmlFor="username-input">Verify Password</label>
				<input id="verify-password-input" name="verify-password"/>

				<button type="button" onClick={this.submitSignupForm}>Submit</button>

			</div>
		)
	}
}

export default SignUpForm;

// Styles
const ContainerStyle = {
	display: 'flex',
	flexDirection: 'column'
}
