import React, { Component} from 'react';
import TextEditor from '../react_components/text_editor';
import styles from '../styles/AddPaper.module.css';
import ImageUploader from './images_upload';
export default class MSRubric extends Component {
    constructor(props) {
        super(props);
        this.state= {
            point_number:"",
            marks: "",
            answer: "",
            tempImages:[],
            images: {}
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handleRubric = (ans) => {
        this.setState({answer : ans})
    }
    handleSave = () => {
        const ret = {
            point_number: this.state.point_number,
            marks: this.state.marks,
            answer: this.state.answer,
            images: Object.values(this.state.images)
        }
        this.props.parentCallback(ret);
    }
    addImage = () => {
        this.setState({
            tempImages: [...this.state.tempImages, <ImageUploader parentCallback = {(image) => this.handleImage(image)}/>]
        })
    }
    handleImage = (image) => {
        this.state.images[image.name] = image.link;
    }
    render() {
        return (
            <div className = {styles.container}>
                <div className={styles.question_card}>
                    <form>
                        <label>
                            Point Number: 
                            <input className = {styles.input} type="text" id="point_number" value = {this.state.point_number} onChange={(e) => this.handleChange(e)}/>
                        </label>
                        <br/>
                        <label>
                            Marks: 
                            <input className = {styles.input} type="text" id="marks" value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                        </label>
                        <br/>
                        <label>
                            Ans: 
                            <TextEditor parentCallback={(ans) => this.handleRubric(ans)}/>
                        </label>
                        <br/>
                    </form >
                    {this.state.temp}
                    <button onClick={styles.button} onClick = {this.addImage}>Add Image</button>
                    <br />
                    <button className = {styles.button} onClick={this.handleSave}>Save</button>
                </div>
            </div>
        )
    }
}