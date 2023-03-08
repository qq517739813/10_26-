import React, { Component } from 'react'
import { Button ,DatePicker } from 'antd';
import {
	SettingOutlined,
	WechatOutlined,
	SearchOutlined,
	
} from '@ant-design/icons';

export default class App extends Component {

	onChange = (e,datestring) => { console.log(e,'分割',datestring); }
	render() {
		return (
			<div>
				<h2>123</h2>
				<Button type="primary">Primary<SearchOutlined /></Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="danger">Danger</Button>
				<Button type="link">Link</Button>
				{/* <Icon type="retweet" /> */}
				<SettingOutlined />
				<WechatOutlined />
				<DatePicker onChange={this.onChange} />

			</div>
		)
	}
}
