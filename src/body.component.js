import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <section style={bodyStyle}>
        Body
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
