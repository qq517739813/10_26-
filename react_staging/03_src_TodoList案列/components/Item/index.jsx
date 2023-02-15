import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {
    state = {
        mouse: false //鼠标移入移出的flag
    }
    //鼠标移入移出item的回调
    handleMouse = (flag) => {
        // 指定事件如点击事件移动事件的回调，回调的时候可以写小括号但是一定得写成返回值是函数的形式高阶形式
        // console.log(flag);
        return () => {
            this.setState({ mouse: flag })
        }
    }
    // 勾选item的checkbox回调
    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked);
            this.props.updatetodo(id, event.target.checked)
        }
    }
    //删除按钮的回调
    handleDelete = (id) => {
        if (window.confirm('确认删除吗')) {

            this.props.deleteTodo(id)

        }
    }
    render() {
        // console.log('item=',this.props);
        const { id, name, done } = this.props
        return (

            <li style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>


        )
    }
}
