import React from 'react';
import {Component} from 'react';
import ImageUploader from '../react_components/images_upload';
import TextEditor from '../react_components/text_editor';
import styles from '../styles/AddPaper.module.css';
export default class AddSubpart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part: "",
            prompt: "",
            marks: "",
            subparts:{},
            tempParts:[],
            images:{},
            tempImages:[]
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handlePrompt = (part) => {
        this.setState({prompt: part});
    }
    handleSubpart = () => {
        this.setState({
            tempParts: [...this.state.tempParts, 
                <AddSubpart parentCallback = {(part) => this.addSubpart(part)}/>
            ]
        })
    }
    addSubpart = (sub) => {
        this.state.subparts[sub.part] = sub;
    }
    addImage = () => {
        this.setState({
            tempImages: [...this.state.tempImages, <ImageUploader parentCallback = {(image) => this.handleImage(image)}/>]
        })
    }
    handleImage = (image) => {
        this.state.images[image.name] = image.link;
    }
    save = () => {
        const subpart = {
            part : this.state.part,
            prompt: this.state.prompt,
            marks: this.state.marks,
            subparts: Object.values(this.state.subparts),
            images: Object.values(this.state.images)
        }
        if (subpart.subparts.length == 0) {
            delete ret.subparts;
        }
        if (subpart.images.length == 0) {
            delete ret.images;
        }
        this.props.parentCallback(subpart)
    }
    render(){
        return (
            <div className = {styles.container}>
                <div className={styles.question_card}>
                    <form>
                        <label>Part:  </label>
                            <input className = {styles.input} type="text" id="part" value = {this.state.part} onChange={(e) => this.handleChange(e)}/>
                        <br/>
        
                        <label>Marks:  </label>
                            <input className = {styles.input} type="text" id="marks" value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                        <br/>
        
                        <label>Prompt: </label> 
                            <TextEditor parentCallback={(part) => this.handlePrompt(part)}/>
                        <br/>
                    </form >
                    {this.state.tempParts}
                    <button onClick={styles.button} onClick = {this.addImage}>Add Image</button>
                    {this.state.tempImages}
                    <button className = {styles.rightButton} onClick={this.handleSubpart}>Add Subpart</button>
                    <button className = {styles.rightButton} onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }
}
