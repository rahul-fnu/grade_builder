import React from 'react';
import {Component} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import TextEditor from '../Components/text_editor';
import styles from '../styles/Admin.module.css';
import AddSubpart from './add_subpart'
// import ImageUploader from '../Components/images_upload';
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
            question_number: "",
            text: "",
            marks: "",
            exam_period: this.props.exam_period,
            board_level: this.props.board_level,
            subject: this.props.subject,
            component_region: this.props.component_region,
            topics:[],
            options: {},
            content:[],
            marking_scheme:[],
            interim:[],
            images:{},
            options:[],
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handlePrompt = (part) => {
        this.setState({text : part});
    }
    addPart = () => {
        this.setState({
            interim: [...this.state.interim, 
            <AddSubpart parentCallback = {(part) => this.addSubpart(part)} />
        ]
        })
    }
    addSubpart = (subpart) => {
        this.state.content[subpart.part] = subpart
        // this.setState({content: [...this.state.content, subpart]})
    }
    temp = () => {
        const ret = {
            question_number: this.state.question_number,
            board_level: this.state.board_level,
            content: this.state.content,
            exam_period: this.state.exam_period,
            marking_scheme: this.state.marking_scheme,
            marks: this.state.marks,
            text: this.state.text,
            images: this.state.images,
            topics: this.state.topics,
            component_region: this.state.component_region,
            options: this.state.options,
            subject: this.state.subject,

        }
        this.props.parentCallback(ret);
    }
    handleImagae = (image) => {
        var key = this.state.images ? this.state.images + 1 : 1;
        this.state.images[key] = image;
    }
    render(){
      return (
        <>
            <div className={styles.question_card}>
                <form>
                    <label>
                        Question No.
                        <input type="text" id="question_number"  value = {this.state.question_number} onChange={(e) => this.handleChange(e)}/>
                    </label><br/>

                    <label>
                        Marks: 
                        <input type="text" id="marks"  value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
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
                        <TextEditor parentCallback = {(part) => this.handlePrompt(part)} />
                    </label><br/>
                    {/* <label>
                        Upload image: 
                        <ImageUploader parentCallback = {(image) => this.handleImagae(image)} />
                    </label><br/> */}
                </form >
                {this.state.interim}
                <button onClick={this.addPart}>Add Subpart</button>
                <button onClick={this.temp}>Add to the database has to be connected to the API</button>
            </div>

            
        </>
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