import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'header.component';
import Body from 'body.component';
import Footer from 'footer.component';


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<div className="layout-wrapper">
  		<Header appState={AppState}/>
    	<Body appState={AppState}/>
  		<Footer appState={AppState}/>
  	</div>,
    document.getElementById('root'));
});

export default {};



// Experimental App State jobby
const AppState = {
	callbacks: [],
	setState: setState,
	subscribe: subscribe,
	showForm: 'Sign Up'
};

function setState(inState) {
	for (var key in inState) {
		if (inState.hasOwnProperty(key)) {
			this[key] = inState[key];
		}
	}
	this.callbacks.forEach((callback) => callback(this))
}

function subscribe(callback) {
	this.callbacks.push(callback);
}
