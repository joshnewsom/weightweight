import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <section style={bodyStyle}>
        {test}
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

window.addEventListener('resize', function () {
  console.log('resize');
});


const test = [];

for (var i = 0; i < 20; i++) {
  test.push(<div key={i}>Test {i}</div>);
}
