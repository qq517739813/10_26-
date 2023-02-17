import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

    search = async () => {
        const { keyWordNode: { value: values } } = this //连续解构赋值重命名写法
        // console.log(value);
        // 发送请求钱通知app更新状态
        //发送请求前通知App更新状态
        // this.props.updateAppState({ isFirst: false, isLoading: true })

        PubSub.publish('token', { isFirst: false, isLoading: true })


        //https://api.github.com/search/users?q=atguigu github原接口
        //axios.get(`https://api.github.com/search/users?q=${value}`)
        //站在3000端口的话向localhost:3000发送都不用写这个，可以忽略掉
        /*axios.get(`api1/search/users?q=${values}`).then(
            response => {
                PubSub.publish('token',{isLoading:false,users:response.data.items})
                console.log(response.data.items);
            },
            error => {
                // 请求失败后更新app状态
                PubSub.publish('token',{isLoading:false,err:error.message})
            })*/


        //发送网络请求---使用fetch发送（未优化）
        /* fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了');
                return response.json()
            },
            error => {
                console.log('联系服务器失败了',error);
                return new Promise(()=>{})
            }
        ).then(
            response => {console.log('获取数据成功了',response);},
            error => {console.log('获取数据失败了',error);}
        ) */

        //发送网络请求---使用fetch发送（优化）
        try {
            const response = await fetch(`api1/search/users?q=${values}`)
            const data = await response.json()
            console.log(data);
            PubSub.publish('token', { isLoading: false, users: data.items })
        } catch (error) {
            console.log('请求出错', error);
            PubSub.publish('token', { isLoading: false, err: error.message })
        }

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
