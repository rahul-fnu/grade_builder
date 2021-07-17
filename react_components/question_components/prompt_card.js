import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import Subpart from './subpart_card';
import TextRenderer from './text_renderer';
//import Editor from './text_editor';
import ImageUploader from '../image_upload/image_upload'
import TextEditor from '../text_editor/text_editor';
import NewTextRenderer from './text_renderer_new'
export default class Prompt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: {}
        }
    }

    updateAnswer = (part) => {
        if (!this.state.answers[this.props.p.part]) {
            this.state.answers[this.props.p.part] = new Set()
        }
        this.state.answers[this.props.p.part].add(part);
    }
    onTrigger = (event) => {
        this.props.parentCallback({part: this.props.p.part, answer: this.state.answers})
        event.preventDefault();
    }
    render() {
        var i = 0;
        var ans = "";
        return (
            <div className = {styles.container}>
                <div className={styles.prompt_card}>
                    <p>{`Part ${this.props.p.part}`}</p>
                    <TextRenderer text={this.props.p.prompt}/>
                    <p>{`Points: ${this.props.p.marks}`}</p>
                    {(this.props.p.subparts.length) == 0 ?
                        <div>
                            <TextEditor part = {this.props.p.part} parentCallback = {(part) => this.updateAnswer(part)} />
                        </div>
                        :
                        <div>
                            {this.props.p.subparts.map(prompt => <Subpart parentCallback = {(part) => this.updateAnswer(part)} s={prompt}/>)}
                        </div>
                    }
                    <button onClick = {this.onTrigger}>Save</button>
                </div>
            </div>
        );
    }
}