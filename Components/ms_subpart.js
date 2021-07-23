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
            answer: [],
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
            <AddMSSubpart />
        ]
        })
    }
    addRubric = () => {
        this.setState({interim: [...this.state.interim,
            <MSRubric parentCallback = {(rub) => this.handleRubric(rub)}/>
        ]})
    }
    handleRubric = (rub) => {
        this.setState({answer : [...this.state.answer, rub]});
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
                      <button onClick={this.addRubric()}>dcdc</button>
                  </label><br/>
                {this.state.content}
                <button onClick={this.addPart}>Add Subpart</button>
          </div>
        )
    }
}