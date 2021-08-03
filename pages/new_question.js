import React from 'react';
import {Component} from 'react';
// import Multiselect from 'multiselect-react-dropdown';
import TextEditor from '../components/text_editor';
import styles from '../styles/AddPaper.module.css';
import AddSubpart from './add_subpart'
import DropdownSelect from '../components/dropdown_select'
const uuidv4 = require("uuid/v4");
import ImageUploader from '../Components/images_upload';
export default class AddQuestionPage extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            subjects: {physics: [{value: 'Physical quantities and units', label: 'Physical quantities and units'},
                                {value: 'Measurement techniques', label: 'Measurement techniques'}, {value: 'Kinematics', label: 'Kinematics'},
                                {value: 'Dynamics', label: 'Dynamics'}, {value: 'Forces, density and pressure', label: 'Forces, density and pressure'}],
                        chemistry: [{value: 'Atoms, molecules and stoichiometry', label: 'Atoms, molecules and stoichiometry'},
                                    {value: 'Atomic structure', label: 'Atomic structure'}, {value: 'States of matter', label: 'States of matter'},
                                    {value: 'Chemical energetics', label: 'Chemical energetics'}, {value: 'Electrochemistry', label: 'Electrochemistry'}],
                        mathematics: [{value: 'Quadratics', label: 'Quadratics'},
                                    {value: 'Functions', label: 'Functions'}, {value: 'Coordinate geometry', label: 'Coordinate geometry'},
                                    {value: 'Circular measure', label: 'Circular measure'}, {value: 'Trigonometry', label: 'Trigonometry'}]
            },
            question_number: "",
            text: "",
            marks: "",
            exam_period: this.props.exam_period,
            board_level: this.props.board_level,
            subject: this.props.subject,
            component_region: this.props.component_region,
            is_mcq: this.props.mcq,
            topics:[],
            options: {},
            content:{},
            marking_scheme:{},
            interim:[],
            options:[],
            temp:[],
            images: {}
        };
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handlePrompt = (part) => {
        this.setState({text : part});
    }
    addPart = () => {
        var id = uuidv4()
        this.setState({
            interim: [...this.state.interim, 
            <AddSubpart id = {id} parentCallback = {(part) => this.addSubpart(part)} onDelete = {(id) => this.handleDelete(id)}/>
        ]
        })
    }
    addSubpart = (subpart) => {
        this.state.content[subpart.part] = subpart
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
    temp = () => {
        const ret = {
            question_number: this.state.question_number,
            board_level: this.state.board_level,
            content: Object.values(this.state.content),
            exam_period: this.state.exam_period,
            marking_scheme: Object.values(this.state.marking_scheme),
            marks: this.state.marks,
            text: this.state.text,
            images: Object.values(this.state.images),
            topics: this.state.topics,
            component_region: this.state.component_region,
            options: this.state.options,
            subject: this.state.subject,
            is_MCQ: this.state.is_mcq
        }
        console.log(ret)
        this.props.parentCallback(ret);
    }
    render(){
      return (
        <>
            <div className={styles.question_card}>
                <form>
                    <label>Question No.  </label>
                        <input className = {styles.input} type="text" id="question_number"  value = {this.state.question_number} onChange={(e) => this.handleChange(e)}/>
                    <br/>

                    <label>Marks:  </label>
                        <input className = {styles.input} type="text" id="marks"  value = {this.state.marks} onChange={(e) => this.handleChange(e)}/>
                    <br/>
                    
                    <label>
                        Topics: 
                        <DropdownSelect
                            options = {this.state.subjects[this.props.subject]}
                            parentCallback = {(data) => this.setState({topics: data})}
                        />    
                    </label><br/>
                    <label>
                        Text: 
                        <TextEditor parentCallback = {(part) => this.handlePrompt(part)} />
                    </label><br/>
                </form >
                {this.state.temp}
                <button onClick={styles.button} onClick = {this.addImage}>Add Image</button>
                {this.state.interim}
                <button className = {styles.button} onClick={this.addPart}>Add Subpart</button>
                <button className = {styles.rightButton} onClick={this.temp}>Add to the database has to be connected to the API</button>
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