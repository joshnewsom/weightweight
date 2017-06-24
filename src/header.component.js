import React from 'react';

import SignInOutUp from './users/sign-in-out-up.component';

class Header extends React.Component {
  render() {
    return (
      <section style={headerStyle}>
        <SignInOutUp/>
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
