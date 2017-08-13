import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'header.component';
import Body from 'body.component';
import Footer from 'footer.component';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isAppState: true
		};

		this.state.set = this.setState.bind(this);
	}

	render() {
		return (
			<div className="layout-wrapper">
				<Header appState={this.state}/>
				<Body appState={this.state}/>
				<Footer appState={this.state}/>
			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<App/>, document.getElementById('root'));
});
