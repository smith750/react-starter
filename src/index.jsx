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
	render() {
		return (
			<ul>
				<li>Italo Calvino</li>
				<li>Silvina Ocampo</li>
				<li>Elizabeth Bowen</li>
			</ul>
		);
	}
}

const Footer = () => (
	<p>This is a footer, which means that it is at the bottom of the page.</p>
);

render(<HelloWorld />, document.getElementById('main'));