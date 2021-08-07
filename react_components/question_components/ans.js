import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
//import Subpart from './subpart_card';
// import TextRenderer from './text_renderer';
import NewTextRenderer from './text_renderer_new'

export default class MarkSchemeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts:{}
        }
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.prompt_card}>
                    <p>{this.props.part}</p>
                    {(Array.isArray(this.props.msq))? 
                        <div>
                            {this.props.msq.map(point => <NewTextRenderer content={point.answer} />)}
                        </div> 
                        :
                        <div>
                            {Object.keys(this.props.msq).sort().map(part => <MarkSchemeComponent part={part} msq={this.props.msq[part]}/>)}
                        </div>
                    }
                </div>
            </div>
        )
    }
}