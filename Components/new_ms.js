import React, { Component, useState} from 'react';
import styles from '../styles/AddPaper.module.css';
import TextEditor from '../Components/text_editor';
import MSRubric from './ms_rubric';
import ImageUploader from './images_upload';
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
            images:{},
            temp:[]
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handleAnswer = (ans) => {
        this.setState({answer : ans});
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
    addImage = () => {
        this.setState({
            temp: [...this.state.temp, <ImageUploader parentCallback = {(image) => this.handleImage(image)}/>]
        })
    }
    handleImage = (image) => {
        console.log(image)
        this.state.images[image.name] = image.link;
        console.log(this.state)
    }
    Save = () => {
        const ret = {
            question_number: this.state.question_number,
            marks: this.state.marks,
            answer: Object.values(this.state.answer),
            subpart: Object.values(this.state.subpart),
            images: Object.values(this.state.images)
        }
        if (ret.subpart.length == 0) {
            console.log(1)
            delete ret.subpart;
        }
        if (ret.images.length == 0) {
            delete ret.images;
        }
        if (ret.answer.length == 0) {
            console.log(1)
            delete ret.answer;
        }
        this.props.parentCallback(ret);
    }
    render() {
        return (
            <>
                <div className = {styles.container}>
                    <div className = {styles.question_card}>
                        <form>
                            <label>
                                Question No.
                                <input className = {styles.input} type="text" id="question_number"  value = {this.state.question_number} onChange={(e) => this.handleChange(e)}/>
                            </label><br/>
                            <label>
                                Marks: 
                                <input className = {styles.input} type="text" id="marks"  value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                            </label><br/>

                        </form>
                        <label>
                            Ans: 
                            {this.state.interim}
                            <button className = {styles.button} onClick={this.addRubric}>Add Rubric</button>
                        </label><br/>
                        {this.state.temp}
                        <button onClick={styles.button} onClick = {this.addImage}>Add Image</button>
                        {this.state.content}
                        <button className = {styles.button} onClick={this.addPart}>Add Subpart</button>
                        <button className = {styles.rightButton} onClick={this.Save}>Save</button>
                    </div>
                </div>
            </>
        )
    }
}