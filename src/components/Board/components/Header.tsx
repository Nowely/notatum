import {Button, Col} from "antd";

export const Header = ({type}: { type: string }) => {
    return (
        <Col span={3}
             style={{
                 marginLeft: 8,
                 marginRight: 8,
                 paddingLeft: 6,
                 paddingTop: 6,
                 paddingBottom: 6,
                 backgroundColor: 'lightcyan'
             }}
        >
            <Button type='text' size='small'>
                {type}
            </Button>
        </Col>
    )
}