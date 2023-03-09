import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {

  state = {carName:'奔驰c63'}

  increment = () => {
    const { value } = this.selectNumber
    // const { count } = this.state
    // this.setState({ count: count + value * 1 })
    store.dispatch({type:'decrement', data:value*1})
  }

  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count - value * 1 })
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 })
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 2000);
  }

  render() {

    return (
      <div>
        <h1>求和：{this.state.count}</h1>
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
