import React, {Component} from 'react';
// import styles from '../../styles/Question.module.css'
import NewTextRenderer from './text_renderer_new';
export default class Checkbox extends Component {
    constructor(props) {
        super();
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({
            checked: !this.state.checked
        });
    }
    render() {
        // this.state.checkList= this.props.list;
        let text = <NewTextRenderer content = {this.props.message} />
        return (
            <div className = "row">
                <div className = "col-md-12">
                    <input type="checkbox" onClick={this.handleClick} /> &nbsp;{text}
                </div>
            </div>
        )
    }
}