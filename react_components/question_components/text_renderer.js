import React, { Component } from 'react';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
export default class TextRenderer extends Component {
    render() {
        return (
            <div>
                <Latex displayMode={true}>{this.props.text}</Latex>
            </div>
        )
    }
}