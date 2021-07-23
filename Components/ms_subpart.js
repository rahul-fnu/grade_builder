import React, { Component} from 'react';
// import TextEditor from '../Components/text_editor';
import MSRubric from './ms_rubric'
import styles from '../styles/Admin.module.css';
import ImageUploader from './images_upload';
export default class AddMSSubpart extends Component {
    constructor(props) {
        super(props);
        this.state= {
            part: "",
            marks: "",
            answer: {},
            subpart:{},
            interim:[],
            content: [],
            ms: [],
            images: {}
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    // handleAnswer = (ans) => {
    //     this.setState({answer : ans});
    // }
    addPart = () => {
        this.setState({
            content: [...this.state.content, 
            <AddMSSubpart parentCallback = {(part) => this.handleSubpart(part)}/>
        ]
        })
    }
    addRubric = () => {
        this.setState({interim: [...this.state.interim,
            <MSRubric parentCallback = {(rub) => this.handleRubric(rub)}/>
        ]})
    }
    handleRubric = (rub) => {
        this.state.answer[rub.point_number] = rub;
    }
    handleSubpart = (part) => {
        this.state.subpart[part.part] = part;
        console.log(this.state)
    }
    handleSave = () => {
        console.log(this.state)
        const ret = {
            part: this.state.part,
            marks: this.state.marks,
            answer: this.state.answer,
            subpart: this.state.subpart,
            images: this.state.images
        }
        this.props.parentCallback(ret);
    }
    render() {
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
  
                  {/* <input type="button" value="Add subpart" onClick={'#'}/><br/> */}
              </form >
              <label>
                      Ans: 
                      {this.state.interim}
                      <button onClick={this.addRubric}>Add Rubric</button>
                  </label><br/>
                {this.state.content}
                <button onClick={this.addPart}>Add Subpart</button>
                <button onClick={this.handleSave}>save</button>
          </div>
        )
    }
}