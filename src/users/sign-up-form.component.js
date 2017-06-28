import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: SignUpFormStyle,
      show: true,
      title: 'Sign Up'
    };
  }

  componentWillMount() {
    this.props.appState.subscribe(onAppStateChange.bind(this));
  }

  render() {
    if (!this.state.show) return null;
    else return (
      <form style={this.state.style}>
        <h1 style={{textAlign: 'center'}}>{this.state.title}</h1>
      </form>
    )
  }
}

export default SignUpForm;


// Styles
const SignUpFormStyle = {
  border: '5px solid black',
  borderRadius: '8px',
  boxShadow: '3px 7px 5px rgba(0,0,0,.3 )',
  height: '90%',
  left: '5%',
  position: 'absolute',
  top: '5%',
  width: '90%'
}

function onAppStateChange(appState) {
  this.setState({show: appState.showForm === this.state.title});
}
