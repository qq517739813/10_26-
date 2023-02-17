import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = () => {
        const { keyWordNode: { value: values } } = this //连续解构赋值重命名写法
        // console.log(value);
        // 发送请求钱通知app更新状态
        //发送请求前通知App更新状态
        this.props.updateAppState({ isFirst: false, isLoading: true })



        //https://api.github.com/search/users?q=atguigu github原接口
        //axios.get(`https://api.github.com/search/users?q=${value}`)
        //站在3000端口的话向localhost:3000发送都不用写这个，可以忽略掉
        axios.get(`api1/search/users?q=${values}`).then(
            response => {
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                // 请求失败后更新app状态
                this.props.updateAppState({
                    isLoading: false, err: error.message
                })
            })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={e => this.keyWordNode = e} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
