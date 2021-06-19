import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import Subpart from './subpart_card';
require("//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css")
var Latex = require('react-latex');
export default class Prompt extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <div className={styles.prompt_card}>
                    <p>{`Part ${this.props.p.part}`}</p>
                    <Latex>{this.props.p.prompt}</Latex>
                    <p>{`Points: ${this.props.p.marks}`}</p>
                    {this.props.p.text && <textarea></textarea>}
                    {(this.props.p.subparts.length) > 0 && 
                        <div>
                            {this.props.p.subparts.map(prompt => <Subpart s={prompt}/>)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}