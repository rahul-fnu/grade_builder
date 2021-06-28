import React, {Component} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
var ans = [];
export default class QuestionC extends Component {
    render() {
        var i = 0;
        return (
            <>
                <div>
                    {/* {data['subject'] = this.props.q.subject}
                    {data['board_level'] = this.props.q.board_level}
                    {data['component_region'] = this.props.q.component_region}
                    {data['exam_period'] = this.props.q.exam_period}
                    {data['question_number'] = this.props.q.question_number}
                    {data['answer'] = []} */}
                    {(this.props.q.text) ? <TextRenderer text={this.props.q.text}/> : ""}
                    {/* {this.props.q.content.map(prompt => data['answer'].push([prompt.part, [], ""]))} */}
                    {this.props.q.content.map(prompt => <Prompt p = {prompt} />)}
                    {/* <KatexRenderer /> */}
                </div>
                <button >Submit</button>
            </>
            // <div>{JSON.stringify(this.props.q)}</div>
        )
    }
}