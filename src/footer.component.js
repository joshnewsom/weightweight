import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section style={footerStyle}>
        <span>Footer</span>
      </section>
    )
  }
}

export default Footer;

// Styles
const footerStyle = {
  backgroundColor: 'gray',
  bottom: '0',
  fontSize: '30px',
  height: '30px',
  left: '0',
  overflow: 'hidden',
  position: 'absolute',
  width: '100%',
  zIndex: 10
};
