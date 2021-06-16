import React, {Component} from 'react';
import Prompt from './prompt_card';

export default class QuestionC extends Component {
    render() {
        return (
            <div>
                {this.props.q.content.map(prompt => <Prompt p = {prompt} />)}
            </div>
        )
    }
}