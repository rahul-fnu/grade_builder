import React, {Component} from 'react';
import NewTextRenderer from './text_renderer_new';
import styles from '../../styles/Question.module.css';
import CheckboxBlock from './checkbox_block';
export default class GradingBlock extends Component {
    constructor(props) {
        super(props);
    }
    score = (score) => {
        this.props.parentCallback(score);
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className = "row">
                    <div className ="col-6">
                        <NewTextRenderer content={this.props.ans} />
                    </div>
                    <div className = "col-6">
                        <CheckboxBlock ans={this.props.ms} parentCallback = {this.score}/>
                    </div>
                </div>
            </div>
        )
    }
}