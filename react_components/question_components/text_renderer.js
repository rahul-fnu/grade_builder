import React, { Component } from 'react';
import styles from '../../styles/Question.module.css'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
export default class TextRenderer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Latex displayMode={true}>{this.props.text}</Latex>
            </div>
        )
    }
}