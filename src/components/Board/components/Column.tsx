import {Button, Card, Col, Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {store} from "../../../Stores/Store";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {Page} from "../../../Models/Page";

export const Column = observer(({type}: { type: string }) => {
	const [creating, setCreating] = useState(false)

	useEffect(() => {
		if (!creating) return

		window.addEventListener("keydown", ev => {
			if (ev.key === 'Escape')
				setCreating(false)
		}, {once: true});
	}, [creating])

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
			{store.selectedPage?.children?.map(value =>
				<Card key={value.id} size="small" style={{marginBottom: 5}}>
					{value.title}
				</Card>
			)}
			{creating && <Input autoFocus onPressEnter={(e) => {
				store.selectedPage?.children?.push(new Page(e.currentTarget.value))
				setCreating(false)
			}} />}
			<Button
				onClick={event => setCreating(true)}
				block type="text" icon={<PlusOutlined/>} style={{flexFlow: 'column', marginBottom: 5}}>
				New
			</Button>
		</Col>
	)
})