import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <section style={headerStyle}>
        <span>Header</span>
      </section>
    )
  }
}

export default Header;

// Styles
const headerStyle = {
  backgroundColor: 'gray',
  fontSize: '50px',
  height: '50px',
  left: '0',
  overflow: 'hidden',
  position: 'absolute',
  top: '0',
  width: '100%',
  zIndex: 10
};
