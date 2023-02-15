import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = () => {
        const { keyWordNode: { value } } = this //连续解构赋值写法
        console.log(value);
        //站在3000端口的话向localhost:3000发送都不用写这个，可以忽略掉
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
            response => {
                this.props.saveUsers(response.data.items)
            },
            error => { console.log(error); })
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
