import { Component } from "react";
import styles from '../../styles/Subject.module.css'
import QuestionCard from "./question_card";
export default class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            questions : props.question
        }
    }
    render() {
        this.questionList = !this.state.questions ? 
            <h2>No questions found</h2> : Array.from(this.state.questions).map(
                question => {
                        return <a href={`/question/${question._id}`}>
                            <QuestionCard q={question} key={question._id} />
                        </a>
                    })
        return ( 
            <div className= {styles.list}>
                <div id = "h3">
                    <strong>
                        <center> {this.state.title}</center>
                    </strong>
                </div>
                {this.questionList}
            </div>
        )
    }
}