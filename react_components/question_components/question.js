import React, {Component} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
var ans = [];
export default class QuestionC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompts: []
        }
    }

    submitAnswers = () => {
        // Connect to db and save answer
        let answers = {}
        for (let i = 0; i < this.state.prompts.length; ++i) {
            // console.log(this.state.prompts[i])
            if (!this.state.prompts[i].state) {
                continue;
            }
            answers[this.state.prompts[i].part] = this.state.prompts[i].state.answers;
        }
        console.log(answers);

        // fetch ("api link", put)
    }

    render() {
        this.state.prompts = this.props.q.content.map(prompt => <Prompt p = {prompt} />);

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
                    {this.state.prompts}
                    {/* <KatexRenderer /> */}
                </div>
                <button onClick={this.submitAnswers}>Submit</button>
            </>
            // <div>{JSON.stringify(this.props.q)}</div>
        )
    }
}