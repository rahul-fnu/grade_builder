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
    anserts = (ans) => {
        this.state.answers[ans.part] = ans.answer
    }
    pri = () => {
        for (var i = 0; i < this.state.prompts.length; i++) {
            this.state.prompts[i].props.p.answers = this.state.answers[this.state.prompts[i].props.p.part];
        }
        function convert (avs) {
            var lis = []
            for (let item of avs) {
                if (item.answers) {
                    lis.push(item.answers)
                } else {
                    lis.push(item)
                }
            }
            var ip = {}
            for (let item of lis) {
                if (typeof item == 'string') {
                    ip = item;
                    break
                }
                var key = Object.keys(item);
                ip[key[0]] = item[key[0]];
                if (ip[key[0]] instanceof Set) {
                    ip[key[0]] = convert(ip[key[0]])
                }
            }
            return ip;
        }
        var keys = Object.keys(this.state.answers)
        var ans = {}
        for (let i = 0; i < keys.length; i++) {
            this.state.answers[keys[i]] = this.state.answers[keys[i]][keys[i]];
            if (this.state.answers[keys[i]] instanceof Set) {
                var lis = convert(this.state.answers[keys[i]])
                this.state.answers[keys[i]] = lis
            }
        }
        for (var i = 0; i < this.state.prompts.length; i++) {
            this.state.prompts[i].props.p.answers = this.state.answers[this.state.prompts[i].props.p.part];
        }
        delete this.state.answers
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