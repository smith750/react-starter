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
		this.state = {
		    writers: ['Italo Calvino', 'Mikhail Bulgakov', 'Silvina Ocampo', 'Elizabeth Bowen', 'Maria Semple'],
            sorted: false
		};
	}

	handleSort(shouldSort) {
	    if (shouldSort) {
	        this.setState({sorted: true});
        } else {
            this.setState({sorted:false});
        }
	}

	render() {
	    const writers = (this.state.sorted)
            ? [...this.state.writers].sort()
            : this.state.writers;
		const writerListItems = writers.map((writerName, index) => <WriterListItem index={index} name={writerName}/>);
		return (
            <div>
                <ul>
                    {writerListItems}
                </ul>
                <div>
                Sort:
                    <input type="radio" id="sort-yes" name="sort" checked={this.state.sorted} onChange={this.handleSort.bind(this, true)}/> Yes
                    <input type="radio" id="sort-no" name="sort" checked={!this.state.sorted} onChange={this.handleSort.bind(this, false)}/> No
                </div>
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
