import React, { Component } from 'react'
import './App.css';
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

	state = { users: [] }

	saveUsers = (users) => {
		console.log('app',users);
		this.setState({ users })
	}

	render() {
		return (
			<div>
				<div className="container">
					<Search saveUsers={this.saveUsers} />
					<List />
				</div>
			</div >
		)
	}
}
