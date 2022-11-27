﻿import {Button, Card, Col} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {store} from "../../../Stores/Store";
import {observer} from "mobx-react-lite";

export const Column = observer(({type}: { type: string }) => {

	const data = []

	return (
		<Col span={3}
			 style={{
				 marginTop: 8,
				 marginLeft: 8,
				 marginRight: 8,
				 paddingLeft: 6,
				 paddingTop: 6,
				 backgroundColor: 'lightcyan'
			 }}
		>
			{store.pages.map(value =>
				<Card key={value.id} size="small">
					{value.title}
				</Card>
			)}
			<Button block type="text" icon={<PlusOutlined/>} style={{flexFlow: 'column'}}>
				New
			</Button>
		</Col>
	)
})