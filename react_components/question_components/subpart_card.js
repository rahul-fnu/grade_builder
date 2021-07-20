import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import TextRenderer from './text_renderer'
//import Editor from './text_editor';
import TextEditor from '../text_editor/text_editor';
import NewTextRenderer from './text_renderer_new';
export default class Subpart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers:{}
        }
    }
    updateAns = (part) => {
        if (!this.state.answers[this.props.s.part]) {
            this.state.answers[this.props.s.part] = []
        }
        this.state.answers[this.props.s.part].push(part);
        this.props.parentCallback(this.state) 
    };
    render() {
        const {data} = this.state;
        var ans = 0;
        return (
            <div className = {styles.container}>
                <div className={styles.subpart_card}>
                    <p>{`Part ${this.props.s.part}:`}</p>
                    <NewTextRenderer content={this.props.s.prompt}/>
                    <p>{`Points: ${this.props.s.marks}`}</p>
                    {(this.props.s.subparts.length) == 0 ?
                        <div>
                            <TextEditor part = {this.props.s.part} parentCallback = {this.updateAns} />
                        </div>
                        : 
                        <div>
                            {this.props.s.subparts.map(prompt => <Subpart parentCallback = {this.updateAns} s={prompt}/>)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}