import React, { Component } from 'react'
// 引入用于连接UI组件和redux的connect
import { connect } from 'react-redux'
// 引入action操作状态的方法
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'



class Count extends Component {

    state = { carName: '奔驰c63' }

    increment = () => {
        const { value } = this.selectNumber
        // store.dispatch(createIncrementAction(value *1,5000))
        // this.forceUpdate() 
        this.props.jia(value * 1)
    }

    decrement = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count - value * 1 })
        // store.dispatch({type:'decrement',data:value *1})

        // store.dispatch(createDecrementAction(value*1))
        this.props.jian(value * 1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        // const count = store.getState()
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }

    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        // const  count  = store.getState()
        // setTimeout(() => {
        // store.dispatch(createIncrementAsyncAction(value *1,2000))
        // }, 5000);
        this.props.jiaAsync(value * 1, 500)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>求和：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>求和为奇数+</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}


export default connect(
    state => ({ count: state }),
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia: num => dispatch(createIncrementAction(num)),
    //     jian: num => dispatch(createDecrementAction(num)),
    //     jiaAsync: (num, time) => { dispatch(createIncrementAsyncAction(num, time)) }

    // })
    // mapDispatchToProps精简版写法
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)