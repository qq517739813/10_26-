import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {


	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生靠a 标签跳转不同界面 */}
							{/* <a className="list-group-item active" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}
							{/* 在react中靠路由链接实现切换组件 */}

							<NavLink activeClassName='list-group-item' to='/about'>about</NavLink>
							<NavLink activeClassName='list-group-item' to='/home'>home</NavLink>

						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}

								<Route path='/about' component={About}></Route>
								<Route path='/home' component={Home}></Route>

							</div>
						</div>
					</div>
				</div>


			</div>
		)
	}
}
