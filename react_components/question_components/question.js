import React, {Component} from 'react';
import Prompt from './prompt_card';
import NewTextRenderer from './text_renderer_new';
import ImageRender from './image_render'
import styles from '../../styles/Question.module.css'
export default class QuestionC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompts: [],
            answers: {},
            filteredAns: {},
            filteredMS: {},
            open: false
        }
    }
    answers = (ans) => {
        this.state.answers[ans.part] = ans.answer
        this.filterAnswer();
    }
    onTrigger = (event) => {
        this.props.parentCallback({ans: this.state.filteredAns})
        event.preventDefault();
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
                if (typeof item == 'string') {
                    map = list[list.length - 1];
                    break
                }
                var key = Object.keys(item);
                map[key[0]] = item[key[0]];
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
        const attempt = {
            answer: this.state.answers,
            marks_obtained: -1,
            last_solved: Date.now()
        }
        return this.state.filteredAns
    }
    render() {
        
        this.state.marking_scheme = this.props.q.marking_scheme;
        this.state.prompts = this.props.q.content.map(prompt => <Prompt parentCallback = {this.answers} p = {prompt}/>);
        return (
            <>
                <div className= {styles.paper}>
                    <br/>
                    {(this.props.q.text) ? <NewTextRenderer className= {styles.paper}  content={this.props.q.text}/> : ""}
                    <br />
                    {(!this.props.q.images)  == 0 ? <ImageRender className= {styles.paper} images={this.props.q.images}/>:null}
                    <br />
                    {this.state.prompts}
                    <button className={styles.rightButton} onClick= {this.onTrigger}>Save</button>
                </div>
            </>
        )
    }
}
