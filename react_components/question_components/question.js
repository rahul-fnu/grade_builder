import React, {Component} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
import Modal from './modal'
import Popup from '../../node_modules/reactjs-popup'
import '../../node_modules/reactjs-popup/dist/index.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { saveInput } from '../../store/user_input/action';
export default class QuestionC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompts: [],
            answers: {},
            filteredAns: {"A" : {}},
            filteredMS: {"cds" : {}}
        }
    }
    answers = (ans) => {
        this.state.answers[ans.part] = ans.answer
        this.filterAnswer();
    }
    filterAnswer = () => {
        this.state.filteredAns = {...this.state.answers}
        for (var i = 0; i < this.state.prompts.length; i++) {
            this.state.prompts[i].props.p.answers = this.state.answers[this.state.prompts[i].props.p.part];
        }
        function convertAnswers (recordedAnswer) {
            var list = []
            for (let item of recordedAnswer) {
                if (item.answers) {
                    list.push(item.answers)
                } else {
                    list.push(item)
                }
            }
            var map = {}
            for (let item of list) {
                // cons
                if (typeof item == 'string') {
                    map = list[list.length - 1];
                    break
                }
                var key = Object.keys(item);
                map[key[0]] = item[key[0]];
                // Array.isArray(variable)
                if (Array.isArray(map[key[0]])) {
                    map[key[0]] = convertAnswers(map[key[0]])
                }
            }
            return map;
        }
        var keys = Object.keys(this.state.filteredAns)
        for (let i = 0; i < keys.length; i++) {
            this.state.filteredAns[keys[i]] = this.state.filteredAns[keys[i]][keys[i]];
            if (Array.isArray(this.state.filteredAns[keys[i]])) {
                var list = convertAnswers(this.state.filteredAns[keys[i]])
                this.state.filteredAns[keys[i]] = list
            }
        }
        for (var i = 0; i < this.state.prompts.length; i++) {
            this.state.prompts[i].props.p.answers = this.state.filteredAns[this.state.prompts[i].props.p.part];
        }
        document.cookie  = JSON.stringify(this.state.filteredAns)
        const attempt = {
            //question: question_id,
            answer: this.state.answers,
            marks_obtained: -1,
            last_solved: Date.now()
        }
        
    }
    filterMarkingScheme = () => {
        const filtered_ans = {};
        var i = 0;
        function mark(data) {
            var list = {};
            for (let item of data) {
                if (item['answer'].length) {
                    list[item['part']] = item['answer']
                } else {
                    list[item['part']] = item.subparts;
                }
            }
            var keys  = Object.keys(list);
            for (let i of keys) {
                if (list[i] && (typeof list[i][0] == 'string')) {
                    list[i] = list[i]
                } else {
                    list[i] = mark(list[i]);
                }
            }
            return list;
        }
        // this.state.filteredMS = mark(this.state.marking_scheme)
        this.state.filteredMS = mark(this.state.marking_scheme);
        console.log(this.state)
    }
    render() {
        this.state.marking_scheme = this.props.q.marking_scheme;
        this.state.prompts = this.props.q.content.map(prompt => <Prompt parentCallback = {this.answers} p = {prompt}/>);
        //onst [open, setIsOpen] = useState(false);
        //const modal = new Modal(open, setIsOpen);
        return (
            <>
                <div>
                    {(this.props.q.text) ? <TextRenderer text={this.props.q.text}/> : ""}
                    {this.state.prompts}
                </div>
                <button onClick= {this.filterMarkingScheme}>Save</button>
                {/* {console.log(this.state.data)} */}
                <Modal ms = {this.state.filteredAns} part = {1} ans = {this.state.filteredMS}/>
            </>
            // <div>{JSON.stringify(this.props.q)}</div>
        )
    }
}

// QuestionC.getInitialProps = async (ctx) => {
//     const res = await fetch(`http://${ctx.req.headers.host}/api/attempts?_id=${ctx.query.question_id}`);
//     const question = (await res.json()).data[0] // Make this an array in the future for better functionality
//     const initAns = cookies(res).answers;
//     console.log(12333)
//     return {
//         question: question,
//         answers: initAns || {}
//     }
// }