import {Row} from "antd"
import {observer} from "mobx-react-lite";
import {Column} from "./components/Column";
import {Header} from "./components/Header";

export const Board = observer(() => {

    return (
        <div style={{marginTop: 10}}>
            <Row gutter={[16, 8]}>
                <Header type={'Daily'}/>
                <Header type={'Week'}/>
                <Header type={'Month'}/>
                <Header type={'Year'}/>
            </Row>

            <Row gutter={[16, 8]}>
                <Column type={'Daily'}/>
                <Column type={'Week'}/>
                <Column type={'Month'}/>
                <Column type={'Year'}/>
            </Row>
        </div>
    )
})

