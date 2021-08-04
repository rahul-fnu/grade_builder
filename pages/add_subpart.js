import React from 'react';
import {Component} from 'react';
import ImageUploader from '../Components/images_upload';
import TextEditor from '../Components/text_editor';
import styles from '../styles/AddPaper.module.css';
const uuidv4 = require("uuid/v4");
export default class AddSubpart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part: "",
            prompt: "",
            marks: "",
            subparts:{},
            interim:[],
            images:{},
            temp:[]
        }
    }
    // getRandomInt = (max) => {
    //     return Math.floor(Math.random() * max);
    // }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handlePrompt = (part) => {
        this.setState({prompt: part});
    }
    handleSubpart = () => {
        this.setState({
            interim: [...this.state.interim, 
            <AddSubpart parentCallback = {(part) => this.addSubpart(part)} /*onDelete = {(id) => this.handleDelete(id)} *//>
        ]
        })
    }
    addSubpart = (sub) => {
        this.state.subparts[sub.part] = sub;
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
    save = () => {
        const ret = {
            part : this.state.part,
            prompt: this.state.prompt,
            marks: this.state.marks,
            subparts: Object.values(this.state.subparts),
            images: Object.values(this.state.images)
        }
        console.log(ret);
        this.props.parentCallback(ret)
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
        
                        {/* <input type="button" value="Add subpart" onClick={'#'}/><br/> */}
                    </form >
                    {this.state.temp}
                    <button onClick={styles.button} onClick = {this.addImage}>Add Image</button>
                    {this.state.interim}
                    <button className = {styles.button} onClick={this.handleSubpart}>Add Subpart</button>
                    <button className = {styles.button} onClick={this.save}>Save</button>
                    <button className = {styles.rightButton}onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}
