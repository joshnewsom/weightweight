import React from 'react';

import AuthButtons from './users/auth-buttons.component';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    return (
      <section style={headerStyle}>
        <AuthButtons appState={this.props.appState}/>
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
