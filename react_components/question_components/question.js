import React, {Component, useState} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
import Modal from './modal'
import Popup from '../../node_modules/reactjs-popup'
import '../../node_modules/reactjs-popup/dist/index.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { saveInput } from '../../store/user_input/action';
import cookie from 'cookie'

var ans = [];
// const globalState = useSelector((st))


export default class QuestionC extends Component {
    // static async getInitialProps(ctx) {
    //     const rest = await fetch(`http://${ctx.req.headers.host}/question/${ctx.query.question_id}`)

    //     const initAns = cookies(rest).answers;
    //     console.log(initAns)
    //     return {
    //       answers: initAns || {}
    //     }
    // }
    
    constructor(props) {
        super(props);
        console.log(document.cookie)
        this.state = {
            prompts: [],
            answers: {},
            perop: document.cookie
            // answers: JSON.parse(props.initialAns) || {}
        }
    }
    parseCookies = (ctx) => {
        return cookie.parse(ctx ? ctx.headers.cookie || {} : document.cookie);
    }
    answers = (ans) => {
        this.state.answers[ans.part] = ans.answer
        // dispatch(saveInput(this.state.answers));
        
        // document.cookie  JSON.stringify(this.state.answer)
        // // var ab = JSON.parse(document.cookie)=
        // // console.log(ab)
        // console.log(document.cookie);
    }

    filterAnswer = () => {
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
                if (typeof item == 'string') {
                    map = item;
                    break
                }
                var key = Object.keys(item);
                map[key[0]] = item[key[0]];
                if (map[key[0]] instanceof Set) {
                    map[key[0]] = convertAnswers(map[key[0]])
                }
            }
            return map;
        }
        function convertMarkingScheme (markingScheme) { 
            var map = {};
            for (let item of markingScheme) {
                if (item.subparts) {
                    map[item.part] = item.subparts;
                    console.log(1)
                } else {
                    map[item.part] = item.answer;
                    console.log(2)
                }
            }
            console.log(map)
            for (let item of map) {
                if (Object.prototype.toString.call( item ) === '[object Array]' ) {
                    //console.log(123);
                }
            }

        }
        var keys = Object.keys(this.state.answers)
        for (let i = 0; i < keys.length; i++) {
            this.state.answers[keys[i]] = this.state.answers[keys[i]][keys[i]];
            if (this.state.answers[keys[i]] instanceof Set) {
                var list = convertAnswers(this.state.answers[keys[i]])
                this.state.answers[keys[i]] = list
            }
            //console.log(this.state)
        }
        for (var i = 0; i < this.state.prompts.length; i++) {
            this.state.prompts[i].props.p.answers = this.state.answers[this.state.prompts[i].props.p.part];
        }
        document.cookie  = JSON.stringify(this.state.answers)
        console.log(document.cookie)
        const attempt = {
            //question: question_id,
            answer: this.state.answers,
            marks_obtained: -1,
            last_solved: Date.now()
        }
        var ms = this.state.marking_scheme;
        var temp = {};
        for (var i = 0; i < ms.length; i++) {
            const obj = {}
            obj.subparts = ms[i].subparts;
            obj.answer = ms[i].answer;
            temp[ms[i].part] = obj
        }
        console.log(this.state)
        this.state.marking_scheme = temp;
        console.log(this.state.marking_scheme);
        // ans = temp
        // //console.log(1)
        // keys = Object.keys(ans)
        // // console.log(keys)
        // for (i = 0; i < keys.length; i++) {
            //console.log(keys[i])
            //console.log(ans[keys[i]])
            //console.log(temp)
            // if (this.marking_scheme[keys[i]])
            //this.marking_scheme[keys[i]] = convertMarkingScheme(this.marking_scheme[keys[i]]);
            //console.log(2);
        //}
    }
    // funtion modal = new Modal();

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
                <button onClick= {this.filterAnswer}>Save</button>
                <Modal />
            </>
            // <div>{JSON.stringify(this.props.q)}</div>
        )
    }
}

QuestionC.getInitialProps = async (ctx) => {
    const res = await fetch(`http://${ctx.req.headers.host}/api/attempts?_id=${ctx.query.question_id}`);
    const question = (await res.json()).data[0] // Make this an array in the future for better functionality
    const initAns = cookies(res).answers;
    console.log(12333)
    return {
        question: question,
        answers: initAns || {}
    }
}