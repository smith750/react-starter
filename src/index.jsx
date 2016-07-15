import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h2>Hola Mundo!</h2>
				<WriterList/>
				<Footer/>
			</div>
		);
	}
}

class WriterList extends React.Component {
	constructor() {
		super();
		this.state = { writers: ['Italo Calvino', 'Mikhail Bulgakov', 'Silvina Ocampo', 'Elizabeth Bowen'] };
	}

	render() {
		const writerListItems = this.state.writers.map((writerName) => (<li>{writerName}</li>))
		return (
			<ul>
				{writerListItems}
			</ul>
		);
	}
}

const Footer = () => (
	<p>This is a footer, which means that it is at the bottom of the page.</p>
);

React.render(<HelloWorld />, document.getElementById('main'));
