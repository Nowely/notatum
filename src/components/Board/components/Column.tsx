import {Button, Card, Col, Dropdown, Input, MenuProps, Modal} from "antd";
import {EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import {store} from "../../../Stores/Store";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {Page} from "../../../Models/Page";
import TextArea from "antd/es/input/TextArea";

const items: MenuProps['items'] = [
    {
        label: 'Delete',
        key: '1',
        danger: true
    },
];

const menuProps = {
    items,
    //onClick: handleMenuClick,
};


export const Column = observer(({type}: { type: string }) => {
    const [creating, setCreating] = useState(false)
    const [selected, setSelected] = useState<Page | null>(null)

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
                <Card hoverable key={value.id} size="small" style={{marginBottom: 5}}
                      onClick={(event) => {
                          if ((event.target as HTMLElement).textContent !== 'Delete')
                              setSelected(value)
                      }}
                >
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        {value.title}
                        <Dropdown menu={{
                            items, onClick: (e) => {
                                store.selectedPage!.children = store.selectedPage?.children?.filter((v) => v !== value)
                                //_.remove(store.selectedPage?.children!, value)
                            }
                        }}>
                            <Button icon={<EllipsisOutlined/>} size={"small"}/>
                        </Dropdown>
                    </div>
                </Card>
            )}
            <Modal
                title={selected?.title}
                mask={false}
                open={Boolean(selected)}
                onOk={() => setSelected(null)}
                onCancel={() => setSelected(null)}
                width={1000}

            >
                <TextArea style={{height: 400}}
                />
            </Modal>
            {creating && <Input autoFocus onPressEnter={(e) => {
                store.selectedPage?.children?.push(new Page(e.currentTarget.value))
                setCreating(false)
            }}/>}
            <Button
                onClick={event => setCreating(true)}
                block type="text" icon={<PlusOutlined/>} style={{flexFlow: 'column', marginBottom: 5}}>
                New
            </Button>
        </Col>
    )
})