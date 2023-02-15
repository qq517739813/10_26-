//创建“外壳”组件App
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

//创建并暴露App组件
export default class App extends Component {
	// 状态在哪里操作状态的方法就在哪里

	// 初始化状态
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: true },
			{ id: '002', name: '睡觉', done: true },
			{ id: '003', name: '打代码', done: false },
			{ id: '004', name: '逛街', done: false },
			{ id: '005', name: '散步', done: true }
		]
	}
	// addtodo用于添加一个todo，接收参数是todoobj
	addtodo = (todoobj) => {
		console.log('App', todoobj);
		// 获取原todos
		const { todos } = this.state
		// 追加一个todos运用es6扩展运算符
		const newtodos = [todoobj, ...todos]
		this.setState({ todos: newtodos })


	}
	// 更新一个todo的check勾选状态
	updatetodo = (id, done) => {
		const { todos } = this.state;
		// 查找appstate中的数据id对比上的更新done值
		const newtodos = todos.map((todoobj) => {
			if (todoobj.id === id) {
				return { ...todoobj, done }
			} else {
				return todoobj
			}
		})
		this.setState({ todos: newtodos })
	}

	//删除一个tood的item删除事件回调
	deleteTodo = (id) => {
		console.log(id);
		// 获取原todos
		const { todos } = this.state
		// 删除对应id过后的todos
		const newtodos = todos.filter((todoobj) => {
			return todoobj.id !== id
		})
		this.setState({ todos: newtodos })
	}

	//底部checked用于全选的回调函数 
	checkAlltodo = (done) => {
		// 获取原state
		const { todos } = this.state
		// 改变数据done值全变为true
		const newtodos = todos.map((todoobj) => {
			return { ...todoobj, done }
		})
		// 更新state状态
		this.setState({ todos: newtodos })


	}
	//clearAllDone 用于清除所有已完成的item
	clearAllDone = () => {
		//  获取原来的todos状态
		const { todos } = this.state
		// 加工数据把done值为false的都返回
		const newTodos = todos.filter((todoObj) => {
			return !todoObj.done
		})
		// 更新状态
		this.setState({ todos: newTodos })
	}

	render() {
		const { todos } = this.state
		return (
			<div id="root">
				<div className="todo-container">
					<div className="todo-wrap">
						<Header addtodo={this.addtodo} />
						<List todos={todos} updatetodo={this.updatetodo} deleteTodo={this.deleteTodo} />
						<Footer todos={todos} checkAlltodo={this.checkAlltodo} clearAllDone={this.clearAllDone} />

					</div>
				</div>
			</div>
		)
	}
}
