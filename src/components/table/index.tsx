import * as React from "react";

import { Thead } from "./thead"
import { Tbody } from "./tbody"

export interface TableConf { dataSource: Array<any>; columns: Array<any>; }

export class Table extends React.Component<TableConf,{}> {
    constructor(props: TableConf) {
        super(props);
    } 

    render() {
        return (
            <table>
                <Thead columns = {this.props.columns} />
                <Tbody dataSource={this.props.dataSource} columns={this.props.columns}/>
            </table>
        );
    }
}