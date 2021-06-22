import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import TextRenderer from './text_renderer'
//import Editor from './text_editor';
export default class Subpart extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className={styles.subpart_card}>
                    <p>{`Part ${this.props.s.part}:`}</p>
                    <TextRenderer text={this.props.s.prompt}/>
                    <p>{`Points: ${this.props.s.marks}`}</p>
                    {(this.props.s.subparts.length) == 0 ? <textarea></textarea> : 
                        <div>
                            {this.props.s.subparts.map(prompt => <Subpart s={prompt}/>)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}