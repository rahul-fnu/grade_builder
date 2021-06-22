import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
//import Subpart from './subpart_card';
import TextRenderer from './text_renderer';

export default class MarkSchemeComponent extends Component {
    render() {
        return (
            <div className = {styles.prompt_card}>
                <p>{this.props.msq.part}</p>
                {(this.props.msq.subparts.length) == 0 ? 
                    <div> 
                        {this.props.msq.answer.map(ans => <TextRenderer text={ans}/>)}
                    </div> 
                    :
                    <div>
                        {this.props.msq.subparts.map(abcd => <MarkSchemeComponent msq={abcd} />)}
                    </div>
                }
            </div>
        )
    }
}