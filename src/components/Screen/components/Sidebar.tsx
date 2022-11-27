import {Button, Layout} from "antd";
import React from "react";
import {PlusOutlined} from "@ant-design/icons";
import {observer} from "mobx-react-lite";
import {PageList} from "./PageList";

export const Sidebar = observer(() => {

    return (
        <Layout.Sider style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
            <PageList/>
            <Button block type="text" icon={<PlusOutlined/>} style={{flexFlow: "column"}}>
                New Page
            </Button>
        </Layout.Sider>
    )
})