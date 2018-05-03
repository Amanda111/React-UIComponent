import * as React from "react";

export interface TbodyConf { dataSource: Array<any>; columns: Array<any>; }

export interface ColConf {colInfo:Array<any>}

export class Tbody extends React.Component<TbodyConf,ColConf> {
    constructor(props: TbodyConf) {
        super(props);
        this.state = {
            colInfo:this.props.columns.map((item)=>{
                return item.dataIndex
            })
        };
    }

    render() {
        const listItems = this.props.dataSource.map((row) =>
            <tr key={row.key}>
                {this.state.colInfo.map((item)=>{
                    return(
                        <td key={item+ '-'+ row.key}>{row[item]}</td>
                    )
                })}
            </tr>
        );
        return (
            <tbody>
                {listItems}
            </tbody>
        );
    }
}