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
                <SortControls sortOnHandler={this.handleSort.bind(this, true)} sortOffHandler={this.handleSort.bind(this, false)} sorted={this.state.sorted}/>
            </div>
		);
	}
}

class WriterListItem extends React.Component {
	render() {
	    const key = "writer:"+this.props.index;
		return <li key={key}>{this.props.name}</li>;
	}
}

class SortControls extends React.Component {
    render() {
        return (<div>
            Sort:
            <input type="radio" id="sort-yes" name="sort" checked={this.props.sorted} onChange={this.props.sortOnHandler}/> Yes
            <input type="radio" id="sort-no" name="sort" checked={!this.props.sorted} onChange={this.props.sortOffHandler}/> No
        </div>);
    }
}

const Footer = () => (
	<p>This is a footer, which means that it is at the bottom of the page.</p>
);

render(<HelloWorld />, document.getElementById('main'));
