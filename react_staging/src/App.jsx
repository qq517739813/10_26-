import React, { Component } from 'react'
import { Button } from 'antd';
import {
	SettingOutlined,
	WechatOutlined
} from '@ant-design/icons';

export default class App extends Component {
	render() {
		return (
			<div>
				<h2>123</h2>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="danger">Danger</Button>
				<Button type="link">Link</Button>
				{/* <Icon type="retweet" /> */}
				<SettingOutlined />
				<WechatOutlined />

			</div>
		)
	}
}
