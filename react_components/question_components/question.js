import React, {Component, useState} from 'react';
import Prompt from './prompt_card';
import TextRenderer from './text_renderer';
import Modal from './modal'
import Popup from '../../node_modules/reactjs-popup'
import '../../node_modules/reactjs-popup/dist/index.css'
import { useSelector, useDispatch } from 'react-redux';
import { saveInput } from '../../store/user_input/action';
var ans = [];
// const globalState = useSelector((st))

export default function QuestionC(props) {
    const state = {
        prompts: [],
        answers:{}
    }
    const globalState = useSelector((state) => state.answers)
    const dispatch = useDispatch();
    const answers = (ans) => {
        state.answers[ans.part] = ans.answer
        dispatch(saveInput(globalState));

    }
    const filterAnswer = () => {

        for (var i = 0; i < state.prompts.length; i++) {
            state.prompts[i].props.p.answers = state.answers[state.prompts[i].props.p.part];
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
        var keys = Object.keys(state.answers)
        for (let i = 0; i < keys.length; i++) {
            state.answers[keys[i]] = state.answers[keys[i]][keys[i]];
            if (state.answers[keys[i]] instanceof Set) {
                var list = convertAnswers(state.answers[keys[i]])
                state.answers[keys[i]] = list
            }
            //console.log(this.state)
        }
        for (var i = 0; i < state.prompts.length; i++) {
            state.prompts[i].props.p.answers = state.answers[state.prompts[i].props.p.part];
        }
        const attempt = {
            //question: question_id,
            answer: state.answers,
            marks_obtained: -1,
            last_solved: Date.now()
        }
        var ms = state.marking_scheme;
        var temp = {};
        for (var i = 0; i < ms.length; i++) {
            const obj = {}
            obj.subparts = ms[i].subparts;
            obj.answer = ms[i].answer;
            temp[ms[i].part] = obj
        }
        console.log(state)
        state.marking_scheme = temp;
        console.log(state.marking_scheme);
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
    state.marking_scheme = props.q.marking_scheme;
    state.prompts = props.q.content.map(prompt => <Prompt parentCallback = {answers} p = {prompt}/>);
        //onst [open, setIsOpen] = useState(false);
        //const modal = new Modal(open, setIsOpen);
    return (
        <>
            <div>
                    {(props.q.text) ? <TextRenderer text={props.q.text}/> : ""}
                    {state.prompts}
            </div>
            <button onClick= {filterAnswer}>Save</button>
            <Modal />
        </>
            // <div>{JSON.stringify(this.props.q)}</div>
    )
}


// QuestionC.getInitialProps = async (ctx) => {
//     const res = await fetch(`http://${ctx.req.headers.host}/api/attempts?_id=${ctx.query.question_id}`);
//     const question = (await res.json()).data[0] // Make this an array in the future for better functionality
//     return {
//         question: question
//     }
// }