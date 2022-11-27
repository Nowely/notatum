import React, {useEffect} from "react";
import {Menu, MenuProps} from "antd";
import {observer} from "mobx-react-lite";
import {store} from "../../../Stores/Store";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group',): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const PageList = observer(() => {
    const onClick: MenuProps['onClick'] = (e) => {
        store.selectedPage = store.pages.find(value => value.id === e.key)
    }
    useEffect(() => {
        if (!store.selectedPage)
            store.selectedPage = store.pages[0]
    }, [])

    return (
        <Menu
            onClick={onClick}
            mode="inline"
            selectedKeys={[store.selectedPage?.id ?? '']}
            //defaultSelectedKeys={[]}
            //defaultOpenKeys={['1']}
            style={{height: '90%', borderRight: 0, backgroundColor: 'inherit'}}
            items={[getItem('Pages', 'pages', null, store.pages.map(v => getItem(v.title, v.id)), 'group')]}
            /*items={[{
                key: `1`,
                label: `Pages`,
                children: store.pages.map(v => ({key: v.id, label: v.title}))
            }]}*/
        />
    )
})