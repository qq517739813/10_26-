import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

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
							{/* 
								<NavLink className='list-group-item' to='/about'>about</NavLink>
								<NavLink className='list-group-item' to='/home'>home</NavLink> */}
							<MyNavLink to='/about'>About</MyNavLink>
							<MyNavLink to='/home/a/b'>Home</MyNavLink>
							<MyNavLink to='/test'>Test</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route title='精准匹配的属性' exact = {true} path='/about' component={About}></Route>
									<Route exact = {true} path='/home' component={Home}></Route>
									<Route path='/test' component={Test}></Route>
								</Switch>
							</div>
						</div>
					</div>
				</div>


			</div>
		)
	}
}
