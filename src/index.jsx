import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            readerJames: { name: "James", writers: ['Italo Calvino', 'Mikhail Bulgakov', 'Silvina Ocampo', 'Elizabeth Bowen', 'Maria Semple']},
            readerWarren: { name: "Warren", writers: ['Roberto Bolano', 'Karl Ove Knausgard', 'Leo Tolstoy', 'Donna Tartt', 'William Vollman', 'David Foster Wallace', 'Vassily Grossman', 'Anthony Doerr', 'Thomas Pynchon', 'Vyasa'] }
        }
    }

	render() {
		return (
			<div>
				<h2>Hola Mundo!</h2>
                <WriterList reader={this.state.readerJames}/>
                <WriterList reader={this.state.readerWarren}/>
				<Footer/>
			</div>
		);
	}
}

class WriterList extends React.Component {
	render() {
		const writerListItems = this.props.reader.writers.map((writerName, index) => <WriterListItem index={index} name={writerName}/>)
		return (
		    <div>
                <h3>Writers for {this.props.reader.name}</h3>
                <ul>
                    {writerListItems}
                </ul>
            </div>
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
