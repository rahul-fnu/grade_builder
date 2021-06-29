import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import Subpart from './subpart_card';
import TextRenderer from './text_renderer';
//import Editor from './text_editor';
import ImageUploader from '../image_upload/image_upload'
import TextEditor from '../text_editor/text_editor';
export default class Prompt extends Component {
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
                            <TextEditor data = {ans}/>
                            <button onClick={console.log(ans)}>prinn</button>
                        </div>
                        :
                        <div>
                            {/* {this.props.p.subparts.map(prompt => data[1].push([prompt.part, [], ""]))} */}
                            {this.props.p.subparts.map(prompt => <Subpart s={prompt}/>)}
                        </div>
                    }
                    <ImageUploader />
                </div>
            </div>
        );
    }
}