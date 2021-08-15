import React, {Component} from 'react';
import NewTextRenderer from './text_renderer_new';
export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({checked: !this.state.checked});
        this.props.parentCallback({correct: this.state.checked, point_number : this.props.answer.point_number, marks : this.props.answer.marks});
    }
    
    render() {
        let text = <NewTextRenderer content = {this.props.answer.answer} />
        return (
            <div className = "row">
                <div className = "col-md-6">
                    <input type="checkbox" onChange={this.handleClick} defaultChecked = {false}/> &nbsp;{text}
                </div>
            </div>
        )
    }
}