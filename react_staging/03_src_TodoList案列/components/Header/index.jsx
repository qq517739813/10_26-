import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

import './index.css'


export default class Header extends Component {
    // 对接收的props进行限制：类型，必要性的限制 
    //给接收的addtodo增加限制必须是func而且必填
    static propTypes  = {
        addtodo:PropTypes.func.isRequired
    }

    // 键盘事件的回调
    handleKeyUp = (e) => {
        // 结构赋值获取keyCode,target
        const { keyCode, target } = e
        // 判断是否点击回车
        if (keyCode !== 13) {
            return
        }
        //判断是否为空
        if (!target.value.trim()) {
            alert('输入不能为空')
            return
        }
        // 准备好一个todoobj准备给app传过去
        const todoobj = { id: nanoid(), name: target.value, done: false }
        // 将todo传递给app
        this.props.addtodo(todoobj)
        // 清空输入框
        e.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
