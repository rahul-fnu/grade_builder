import React from 'react';
import {Component} from 'react';
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
            interim:[]
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
    // ab = new Set();
    handleSubpart = () => {
        // var id = this.getRandomInt(200)
        // while (this.ab.has(id)) {
        //     id = this.getRandomInt(200)
        // }
        this.setState({
            interim: [...this.state.interim, 
            <AddSubpart /*id = {id}*/parentCallback = {(part) => this.addSubpart(part)} /*onDelete = {(id) => this.handleDelete(id)} *//>
        ]
        })
    }
    addSubpart = (sub) => {
        this.state.subparts[sub.part] = sub;
    }
    // handleDelete = (id) => {
    //     console.log(id)
    //     var abc = this.state.interim.filter(function(obj) {
    //         console.log(obj.props.id)
    //         return obj.props.id != id;
    //     })
    //     this.ab.delete(id)
    //     this.setState({interim:abc})
    // }
    save = () => {
        const ret = {
            part : this.state.part,
            prompt: this.state.prompt,
            marks: this.state.marks,
            subparts: this.state.subparts
        }
        console.log(ret);
        this.props.parentCallback(ret)
    }
    // handleDelete = () => {
    //     this.props.onDelete(this.props.id);
    // }
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
                    {this.state.interim}
                    <button className = {styles.button} onClick={this.handleSubpart}>Add Subpart</button>
                    <button className = {styles.button} onClick={this.save}>Save</button>
                    <button className = {styles.rightButton}onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}
