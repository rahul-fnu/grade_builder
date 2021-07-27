import React from 'react';
import {Component} from 'react';
import TextEditor from '../Components/text_editor';
import styles from '../styles/Admin.module.css';
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
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handlePrompt = (part) => {
        this.setState({prompt: part});
    }
    handleSubpart = () => {
        var id = uuidv4()
        this.setState({
            interim: [...this.state.interim, 
            <AddSubpart id = {id} parentCallback = {(part) => this.addSubpart(part)} onDelete = {(id) => this.handleDelete(id)}/>
        ]
        })
    }
    addSubpart = (sub) => {
        this.state.subparts[sub.part] = sub;
    }
    handleDelete = (id) => {
        console.log(id)
        var abc = this.state.interim.filter(function(obj) {
            console.log(obj.props.id)
            return obj.props.id != id;
        })
        this.setState({interim:abc})
    }
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
    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }
    render(){
        return (
          <div className={styles.question_card}>
              <form>
                  <label>
                      Part:
                      <input type="text" id="part" value = {this.state.part} onChange={(e) => this.handleChange(e)}/>
                  </label><br/>
  
                  <label>
                      Marks: 
                      <input type="text" id="marks" value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                  </label><br/>
  
                  <label>
                      Prompt: 
                      <TextEditor parentCallback={(part) => this.handlePrompt(part)}/>
                  </label><br/>
  
                  {/* <input type="button" value="Add subpart" onClick={'#'}/><br/> */}
              </form >
              {this.state.interim}
              <button onClick={this.handleSubpart}>Add Subpart</button>
              <button onClick={this.save}>Save</button>
              <button onClick={this.handleDelete}>Delete</button>
          </div>
        );
    }
}
