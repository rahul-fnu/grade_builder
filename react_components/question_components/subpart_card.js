import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import TextRenderer from './text_renderer'
//import Editor from './text_editor';
import TextEditor from '../text_editor/text_editor';
export default class Subpart extends Component {
    render() {
        var ans = "";
        var i = 0;
        return (
            <div className = {styles.container}>
                <div className={styles.subpart_card}>
                    <p>{`Part ${this.props.s.part}:`}</p>
                    <TextRenderer text={this.props.s.prompt}/>
                    <p>{`Points: ${this.props.s.marks}`}</p>
                    {(this.props.s.subparts.length) == 0 ?
                        <div>
                            <TextEditor />
                        </div>
                        : 
                        <div>
                            {/* {this.props.s.subparts.map(prompt => data[1].push([prompt.part, [], ""]))} */}
                            {this.props.s.subparts.map(prompt => <Subpart s={prompt}/>)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}