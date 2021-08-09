import React, {Component} from 'react';
// import styles from '../../styles/Question.module.css'
import NewTextRenderer from './text_renderer_new';
export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({checked: !this.state.checked});
        this.props.parentCallback({correct: this.state.checked, point_number : this.props.point_number, marks : this.props.marks});
        event.preventDefault();

    }
    
    render() {
        // this.state.checkList= this.props.list;
        let text = <NewTextRenderer content = {this.props.answer} />
        return (
            <div className = "row">
                <div className = "col-md-12">
                    <input type="checkbox" onClick={this.handleClick} /> &nbsp;{text}
                </div>
            </div>
        )
    }
}