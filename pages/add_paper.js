import React from 'react';
import {Component} from 'react';
import AddQuestionPage from './new_question'
import styles from '../styles/AddPaper.module.css';
import AddMS from '../components/new_ms'
export default class AddPaperPage extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            board_level: "",
            subject: "",
            exam_period: "",
            component_region: "",
            content : [],
            ms : [],
            session : "",
            year : "",
            mcq: false,
            questions: {},
            ms_final : {}

        }
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    mcqHandler = () => {
        this.state.mcq = !this.state.mcq;
    }
    // ab = new Set();
    addQuestion = () => {
        this.setState({
            content: [...this.state.content, 
            <AddQuestionPage subject = {this.state.subject} board_level ={this.state.board_level} exam_period = {this.state.session + this.state.year} component_region = {this.state.component_region} parentCallback = {(ques) => this.updateQuestion(ques)} /*onDelete = {() => this.handleDelete(id)}*//>
        ]
        })
    }
    addMS = () => {
        console.log(this.state)
        this.setState({
            ms: [...this.state.ms,
                <AddMS parentCallback = {(ms) => this.updateMS(ms)} />
            ]
        })
    }
    allValid = () => {
        // console.log(this.state.)
        return (this.state.subject && this.state.board_level && this.state.session && this.state.year && this.state.component_region);
    }
    updateQuestion = (ques) => {
        this.state.questions[ques.question_number] = ques
        // this.setState({questions: [...this.state.questions, ques]})
    }
    updateMS = (ms) => {
        this.state.ms_final[ms.question_number] = ms;
    }
    temp = () => {
        var obj = Object.keys(this.state.questions)
        for (var a of obj) {
            if (a in this.state.ms_final && a in this.state.questions) {
                this.state.questions[a].marking_scheme = this.state.ms_final[a];
            }
        }
        console.log(this.state);
    }
    render(){
      return (
          <>
          <div className={styles.container}>
            <div class = {styles.page_card}>
                <form>
                    <label>
                        Board Level:
                        <select className={styles.options} id="board_level" value = {this.state.board_level} onChange={(e) => this.handleChange(e)}>
                            <option value="" disabled selected>Select board level</option>
                            <option value="caie-a-level">A levels</option>
                        </select>
                    </label><br/>

                    <label>
                        Subject:
                        <select className={styles.options} id="subject" value = {this.state.subject} onChange={(e) => this.handleChange(e)}>
                            <option value="" disabled selected>Select Subject</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="mathematics">Maths</option>
                            <option value="economics">Economics</option>
                        </select>         
                    </label><br/>

                    <label>
                        Exam Session:
                        <select className={styles.options} id="session" value = {this.state.session} onChange={(e) => this.handleChange(e)}>
                            <option value="" disabled selected>Select Exam Period</option>
                            <option value="March ">March</option>
                            <option value="May ">May</option>
                            <option value="October">October</option>
                        </select>  
                    </label><br/>
                    <label>Year: </label>
                        <select className={styles.options} id="year" value = {this.state.year} onChange={(e) => this.handleChang(e)}>
                            <option value="" disabled selected>Select Year</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                        </select>  
                    <br/>
                    <label>Component Region: </label>
                        <select className={styles.options} id="component_region" value = {this.state.component_region} onChange={(e) => this.handleChang(e)}>
                            <option value="" disabled selected>Component Region</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                        </select>
                    <br/>
                    <label>MCQ: </label>
                        <input id="mcq" type="checkbox" defaultChecked={false} onChange={this.mcqHandler}/>
                    <br/>
                    {/* <input type="button" value="Add question" onClick={'#'}/><br/> */}

                    {/* <input type="submit" value="Submit" /> */}
                </form>
                <div className = {styles.question_card}>
                    <p>Add Questions</p>
                    {this.state.content}
                    <button className = {styles.button} disabled = {!this.allValid} onClick={this.addQuestion}>New Question</button>
                </div>
                <div className = {styles.question_card}>
                    <p>Add Marking Scheme</p>
                    {this.state.ms}
                    <button className = {styles.button} disabled = {!this.allValid} onClick={this.addMS}>New MS Question</button>
                </div>
                <button className = {styles.button} onClick={this.temp}>Submit</button>
            </div>
        </div>
        </>
      );
    }
}

// export default function AddPaper({data}){
//     return <AddPaperPage q={data.questions} u= {data.users}></AddPaperPage>
// }

// AddPaper.getInitialProps = async (context) => {
//     const res1 = await fetch('http://localhost:3000/api/questions');
//     const res2 = await fetch('http://localhost:3000/api/users');
//     const questions = (await res1.json()).data
//     const users = (await res2.json()).data
//     return {
//         data: {questions: questions, users: users} 
//     }
// }