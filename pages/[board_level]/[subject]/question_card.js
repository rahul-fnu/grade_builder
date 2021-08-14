import { Component } from "react";
import styles from '../../../styles/Subject.module.css'

export default class QuestionCard extends Component {
    render() {
        return (
            <div className={styles.card}>
                <strong>{`${this.props.q.exam_period}, Question ${this.props.q.question_number}`}</strong>
                <p>{`Topics: ${this.props.q.topics.join(', ')}`}</p>
                {/* <p>{`Marks: ${this.props.q.marks}`}</p> */}
            </div>
        )
    }
}
