import * as React from "react";

export interface TheadConf { columns: Array<any>; }

export class Thead extends React.Component<TheadConf,{}> {
    constructor(props: TheadConf) {
        super(props);
    } 

    render() {
        const listItems = this.props.columns.map((item) =>
            <th key={item.key}>
                {item.title}
            </th>
    );
        return (
            <thead>
                <tr>
                    {listItems}
                </tr>
            </thead>
        );
    }
}