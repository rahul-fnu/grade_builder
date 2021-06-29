import React, {Component} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
var ans = [];
export default class QuestionC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompts: [],
            answers:{}
        }
    }

    // submitAnswers = () => {
    //     // Connect to db and save answer
    //     let answers = {}
    //     for (let i = 0; i < this.state.prompts.length; ++i) {
    //         // console.log(this.state.prompts[i])
    //         if (!this.state.prompts[i].state) {
    //             continue;
    //         }
    //         answers[this.state.prompts[i].part] = this.state.prompts[i].state.answers;
    //     }
    //     console.log(answers);

    //     // fetch ("api link", put)
    // }
    anserts = (ans) => {
        this.state.answers[ans.part] = ans.answer
    }
    pri = () => {
        console.log(this.state)
    }
    render() {
        this.state.prompts = this.props.q.content.map(prompt => <Prompt parentCallback = {this.anserts} p = {prompt} />);

        return (
            <>
                <div>
                    {(this.props.q.text) ? <TextRenderer text={this.props.q.text}/> : ""}
                    {this.state.prompts}
                </div>
                <button onClick= {this.pri}>Submit</button>
            </>
            // <div>{JSON.stringify(this.props.q)}</div>
        )
    }
}