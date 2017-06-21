import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'header.component';
import Body from 'body.component';
import Footer from 'footer.component';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<div className="layout-wrapper">
  		<Header/>
    	<Body/>
  		<Footer/>
  	</div>,
    document.getElementById('root'));
});
