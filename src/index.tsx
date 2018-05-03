import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button } from "./components/button/index";
import { Table } from "./components/table/index"


const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}]

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

class App extends React.Component {
    render() {
        return (
            <div>
                <Button text="Hello" type="default" />
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("example")
);