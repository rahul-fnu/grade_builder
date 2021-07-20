import React from 'react';
import {Component} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import TextEditor from '../Components/text_editor';
import styles from '../styles/Admin.module.css';
export default class AddQuestionPage extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            subjects: {physics: [{name: 'Physical quantities and units', id: 'Physical quantities and units'},
                                {name: 'Measurement techniques', id: 'Measurement techniques'}, {name: 'Kinematics', id: 'Kinematics'},
                                {name: 'Dynamics', id: 'Dynamics'}, {name: 'Forces, density and pressure', id: 'Forces, density and pressure'}],
                        chemistry: [{name: 'Atoms, molecules and stoichiometry', id: 'Atoms, molecules and stoichiometry'},
                                    {name: 'Atomic structure', id: 'Atomic structure'}, {name: 'States of matter', id: 'States of matter'},
                                    {name: 'Chemical energetics', id: 'Chemical energetics'}, {name: 'Electrochemistry', id: 'Electrochemistry'}],
                        mathematics: [{name: 'Quadratics', id: 'Quadratics'},
                                    {name: 'Functions', id: 'Functions'}, {name: 'Coordinate geometry', id: 'Coordinate geometry'},
                                    {name: 'Circular measure', id: 'Circular measure'}, {name: 'Trigonometry', id: 'Trigonometry'}]
            },
            question_number: -1,
            text: "",
            marks: -1,
            exam_period: this.props.exam_period,
            board_level: this.props.board_level,
            subject: this.props.subject,
            topics:[],
            options: {},
            content:[],
            marking_scheme:[]
        };
    }
    handleChang = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    render(){
      return (
        <div className={styles.question_card}>
            <form>
                <label>
                    Question No.
                    <input type="text" value = {this.state.question_number} onChange={(e) => this.handleChang(e)}/>
                </label><br/>

                <label>
                    Marks: 
                    <input type="text" id="marks"  value = {this.state.marks} onChange={(e) => this.handleChang(e)}/>
                </label><br/>
                
                <label>
                    Topics: 
                    <Multiselect
                        options={this.state.subjects[this.props.subject]} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        isObject = {true}
                    />
                </label><br/>

                <label>
                    Text: 
                    <TextEditor />
                </label><br/>

                <label>
                    Mark Scheme: 
                    <input type="text" id="mark_scheme" />
                </label><br/>

                <label>
                    Upload image: 
                    <input type="file" id="image" />
                </label><br/>

                <input type="button" value="Add subpart" onClick={'#'}/><br/>
            </form >
        </div>
      );
    }
}

// AddQuestion.getInitialProps = async (context) => {
//     const res1 = await fetch('http://localhost:3000/api/questions');
//     const res2 = await fetch('http://localhost:3000/api/users');
//     const questions = (await res1.json()).data
//     const users = (await res2.json()).data
//     return {
//         data: {questions: questions, users: users} 
//     }
// }