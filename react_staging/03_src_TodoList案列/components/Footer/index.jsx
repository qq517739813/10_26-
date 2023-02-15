import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {

    // 全选checked的回调函数
    handleCheckedAll = (event) => {
        this.props.checkAlltodo(event.target.checked)
    }

    // 清除已完成的的回调函数
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    render() {
        const { todos, checkAlltodo } = this.props
        // console.log(todos);
        // 底部功能有三部分：
        // 1：全部勾选后候选框打勾，部分勾选不打勾
        // 2：todo多少个打勾的就已完成显示多少个
        // 3:清除全部就清除掉所有打钩的

        // debugger
        // 已完成数
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        console.log(doneCount);
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckedAll} checked={doneCount === total && total != 0 ? true : false} />
                    {/*checkd true和false能改变CheckBox的勾选状态但无法被改变会写死，通常react会提示需要绑定onChange事件来处理
                    使用defaultChecked，但是defaultchecked只在第一次生效
                    checked能使用多出始终以最后一次为主*/}
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
