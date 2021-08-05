import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
//import Subpart from './subpart_card';
// import TextRenderer from './text_renderer';
import NewTextRenderer from './text_renderer_new'

export default class MarkSchemeComponent extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className = {styles.prompt_card}>
                    <p>{this.props.msq.part}</p>
                    {/* {console.log(this.props.ms)} */}
                    {(!this.props.msq.subparts) == 0 ? 
                        <div>
                            {this.props.msq.subparts.map(abcd => <MarkSchemeComponent msq={abcd} />)}
                        </div> 
                        :
                        <div>
                            {
                            this.props.msq.answer ? this.props.msq.answer.map(ans => <NewTextRenderer content={ans}/>) : null
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}