import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Message/Detail'

export default class Message extends Component {
	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' }
		]
	}
	render() {
		const { messageArr } = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgobj) => {
							return (
								<li key={msgobj.id} >
									<Link to={`/home/message/detail/?id=${msgobj.id}&title=${msgobj.title}`}>{msgobj.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<hr />
				{/* 注册路由 */}
				<Route path="/home/message/detail" component={Detail} />
			</div>
		)
	}
}
