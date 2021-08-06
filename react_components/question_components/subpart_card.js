import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import ImageRender from './image_render'
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
        return (
            <div className = {styles.container}>
                <div className={styles.subpart_card}>
                    <span>{`Part ${this.props.s.part}:`}</span>
                    <div className={`pull-right ${styles['right']}`}>
                        <span> {`Points: ${this.props.s.marks}`}</span>
                    </div><br/><br/>
                    <NewTextRenderer content={this.props.s.prompt}/><br/>
                    {(!this.props.s.images)  == 0 ? <ImageRender images={this.props.s.images}/>:null}
                    {(!this.props.s.subparts) == 0 ?
                        <div>
                            {this.props.s.subparts.map(prompt => <Subpart parentCallback = {this.updateAns} s={prompt}/>)}
                        </div>
                        : 
                        <div>
                            <TextEditor part = {this.props.s.part} parentCallback = {this.updateAns} />
                        </div>
                    }
                </div>
            </div>
        );
    }
}