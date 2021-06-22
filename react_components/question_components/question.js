import React, {Component} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
export default class QuestionC extends Component {
    render() {
        return (
            <div>
                {(this.props.q.text) ? <TextRenderer text={this.props.q.text}/> : ""}
                {this.props.q.content.map(prompt => <Prompt p = {prompt} />)}
            </div>
            // <div>{JSON.stringify(this.props.q)}</div>
        )
    }
}