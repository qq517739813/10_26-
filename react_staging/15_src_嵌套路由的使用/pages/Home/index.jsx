import React, { Component } from 'react'
import { Route ,Redirect} from "react-router-dom";
import MyNavLink from '../../components/MyNavLink'
import Message from './Message';
import News from './News';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>我是home内容</div>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to="/home/news"/>
        </div>
      </div>
    )
  }
}
