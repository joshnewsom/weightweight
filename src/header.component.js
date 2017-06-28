import React from 'react';

import SignInOutUp from './users/sign-in-out-up.component';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentWillMount() {
    this.props.appState.subscribe(onAppStateChange.bind(this));
  }

  render() {
    return (
      <section style={headerStyle}>
        <div>{this.state.count}</div>
        <SignInOutUp appState={this.props.appState}/>
      </section>
    )
  }
}

export default Header;

// Styles
const headerStyle = {
  backgroundColor: 'gray',
  height: '50px',
  left: '0',
  overflow: 'hidden',
  position: 'absolute',
  top: '0',
  width: '100%',
  zIndex: '10'
};

function onAppStateChange(appState) {
  this.setState({count: ++this.state.count})
}
