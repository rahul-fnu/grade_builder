import React, { Component, useState} from 'react';
import styles from '../styles/AddPaper.module.css';
import TextEditor from '../Components/text_editor';
import MSRubric from './ms_rubric';
// import ImageUploader from './images_upload';
import AddMSSubpart from './ms_subpart';
export default class AddMS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            question_number: "",
            marks: "",
            answer: {},
            content: [],
            interim:[],
            ms: [],
            subpart:{},
            images: {}
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handleAnswer = (ans) => {
        this.setState({answer : ans});
    }
    handleImages = (image) => {
        var key = this.state.images ? this.state.images.length + 1 : 1;
        this.state.images[key] = image;
    }
    addPart = () => {
        this.setState({
            content: [...this.state.content, 
            <AddMSSubpart parentCallback = {(part) => this.handlePart(part)}/>
        ]
        })
    }
    handlePart = (part) => {
        this.state.subpart[part.part] = part;
    } 
    addRubric = () => {
        this.setState({interim: [...this.state.interim,
            <MSRubric parentCallback = {(rub) => this.handleRubric(rub)}/>
        ]})
    }
    handleRubric = (rub) => {
        this.state.answer[rub.point_number] = rub;
    }
    temp = () => {
        console.log(this.state)
    }
    render() {
        return (
            <>
                <div className = {styles.container}>
                    <div className = {styles.question_card}>
                        <form>
                            <label>Question No.  </label>
                                <input className = {styles.input} type="text" id="question_number"  value = {this.state.question_number} onChange={(e) => this.handleChange(e)}/>
                            <br/>
                            <label>Marks: </label>
                                <input className = {styles.input} type="text" id="marks"  value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                            <br/>
                        </form>
                        <label>Ans: </label>
                            {this.state.interim}
                            <button className = {styles.button} onClick={this.addRubric}>Add Rubric</button>
                        <br/>
                        {this.state.content}
                        <button className = {styles.button} onClick={this.addPart}>Add Subpart</button>
                        <button className = {styles.rightButton} onClick={this.temp}>Delete</button>
                    </div>
                </div>
            </>
        )
    }
}