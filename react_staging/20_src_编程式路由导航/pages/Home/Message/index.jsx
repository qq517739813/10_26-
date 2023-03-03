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

	pushShow = (id, title) => {
		// console.log(id,title);
		// push跳转+携带params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		// push跳转+携带search参数
		this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

		// push跳转+携带state参数
		// this.props.history.push(`/home/message/detail`, { id, title })

	}

	replaceShow = (id, title) => {
		// replace跳转+携带params参数
		// this.props.history.replace(`/home/message/detail/${id}/${title}}`)

		//replace跳转+携带search参数
		this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		//replace跳转+携带state参数
		// this.props.history.replace(`/home/message/detail`, { id, title })

	}

	goback = () => {
		this.props.history.goBack()
	}

	forward = () => {
		this.props.history.goForward()
	}

	go = () => {
		this.props.history.go(2)
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

									{/* 向路由组件传递params参数 */}
									{/* <Link to={`/home/message/detail/${msgobj.id}/${msgobj.title}`}>{msgobj.title}</Link> */}

									{/* 向路由组件传递search参数 */}
									{/* <Link to={`/home/message/detail/?id=${msgobj.id}&title=${msgobj.title}`}>{msgobj.title}</Link> */}

									{/* 向路由组件传递state参数 */}
									<Link replace={true} to={{ pathname: '/home/message/detail', state: { id: msgobj.id, title: msgobj.title } }}>{msgobj.title}</Link>
									&nbsp;<button onClick={() => this.pushShow(msgobj.id, msgobj.title)}>push查看</button>
									<button onClick={() => { this.replaceShow(msgobj.id, msgobj.title) }} >replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<hr />
				{/* 注册路由 */}
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

				{/* search参数无需声明接收，正常注册路由即可 */}
				<Route path="/home/message/detail" component={Detail} />

				{/* state参数无需声明接收，正常注册路由即可 */}

				{/* <Route path="/home/message/detail" component={Detail} /> */}

				<button onClick={this.goback} >回退</button>
				<button onClick={this.forward}>前进</button>
				<button onClick={this.go}>go</button>
			</div>
		)
	}
}
