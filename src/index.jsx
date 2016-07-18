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
		this.state = { writers: ['Italo Calvino', 'Mikhail Bulgakov', 'Silvina Ocampo', 'Elizabeth Bowen', 'Maria Semple'] };
	}

	render() {
		const writerListItems = this.state.writers.map((writerName, index) => <WriterListItem index={index} name={writerName}/>)
		return (
			<ul>
				{writerListItems}
			</ul>
		);
	}
}

class WriterListItem extends React.Component {
	render() {
	    const key = "writer:"+this.props.index;
		return <li key={this.props.index}>{this.props.name}</li>;
	}
}

const Footer = () => (
	<p>This is a footer, which means that it is at the bottom of the page.</p>
);

render(<HelloWorld />, document.getElementById('main'));