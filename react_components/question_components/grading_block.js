import React, {Component} from 'react';
import NewTextRenderer from './text_renderer_new';
import styles from '../../styles/Question.module.css';
import CheckboxBlock from './checkbox_block';
export default class GradingBlock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className = "row">
                    <div className ="col-md-6">
                        <NewTextRenderer content={this.props.ans} />
                    </div>
                    <div className = "col-md-6">
                        <CheckboxBlock ans={this.props.ms} />
                    </div>
                </div>
            </div>
        )
    }
}