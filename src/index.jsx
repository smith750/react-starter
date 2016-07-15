import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>Hola Mundo!</div>
		);
	}
}

React.render(<HelloWorld />, document.getElementById('main'));
