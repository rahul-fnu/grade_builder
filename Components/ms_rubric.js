import React, { Component} from 'react';
import TextEditor from '../Components/text_editor';
import styles from '../styles/Admin.module.css';
export default class MSRubric extends Component {
    constructor(props) {
        super(props);
        this.state= {
            point_number:"",
            marks: "",
            answer: "",
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handleRubric = (ans) => {
        this.setState({answer : ans})
    }
    handleSave = () => {
        this.props.parentCallback(this.state);
    }
    render() {
        return (
            <div className={styles.question_card}>
              <form>
                    <label>
                      Point Number: 
                      <input type="text" id="point_number" value = {this.state.point_number} onChange={(e) => this.handleChange(e)}/>
                  </label><br/>
                  <label>
                      Marks: 
                      <input type="text" id="marks" value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                  </label><br/>
                  <label>
                      Ans: 
                      <TextEditor parentCallback={(ans) => this.handleRubric(ans)}/>
                  </label><br/>
  
                  {/* <input type="button" value="Add subpart" onClick={'#'}/><br/> */}
              </form >
              <button onClick={this.handleSave()}>Save</button>
          </div>
        )
    }
}