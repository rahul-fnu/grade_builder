import React from 'react';
import {Component} from 'react';
import TextEditor from '../Components/text_editor';
import styles from '../styles/Admin.module.css';
export default class addSubpart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part: "",
            prompt: "",
            marks: -1,
            subpart:[],
            interin:[]
        }
    }
    render(){
        return (
          <div className={styles.question_card}>
              <form>
                  <label>
                      Part:
                      <input type="text" id="question_number" />
                  </label><br/>
  
                  <label>
                      Marks: 
                      <input type="text" id="marks" />
                  </label><br/>
  
                  <label>
                      Prompt: 
                      <TextEditor />
                  </label><br/>
  
                  <input type="button" value="Add subpart" onClick={'#'}/><br/>
              </form >
          </div>
        );
    }
}
