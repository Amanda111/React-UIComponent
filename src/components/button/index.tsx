import * as React from "react";
import "./button.scss"

export interface ButtonTxt { text: string;type: string;}

export class Button extends React.Component<ButtonTxt,{}> {
    handleClick() {
        console.log("clicked")
    }

    render() {
        return (
            <button onClick={this.handleClick} className={"btn-"+this.props.type}>
                {this.props.text}
            </button>
        );
    }
}