import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import Subpart from './subpart_card';
import {latexParser} from '../../node_modules/latex-parser';
export default class Prompt extends Component {
    render() {
        const la = latexParser.parse(this.props.p.prompt).value[0].text
        console.log(la)
        return (
            <div className = {styles.container}>
                <div className={styles.prompt_card}>
                    <p>{`Part ${this.props.p.part}: ${la}`}</p>
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