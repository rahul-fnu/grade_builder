import React, {Component} from 'react';
import Checkbox from './checkbox';
import styles from '../../styles/Question.module.css'
export default class CheckboxBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points:0,
            rubrics: {}
        }
    }
    updateRubric(rubric) {
        const obj = this.state.rubrics;
        if (rubric.correct) {
            obj[rubric.point_number] = parseInt(rubric.marks);
            this.setState({rubrics: obj});
        } else {
            if (Object.keys(obj).includes(rubric.point_number)) {
                obj[rubric.point_number] = 0;
                this.setState({rubrics: obj});
            }
        }
        const points = this.calculatePoints(obj) 
        this.setState({points: points}, () => {
            const val = this.state.points;
            this.props.parentCallback(val)
        })

    }
    calculatePoints(points) {
        var sum = 0;
        for (let val of Object.values(points)) {
            sum += parseInt(val);
        }
        return sum
    }
    render() {
        return (
            <>
                <div className = {styles.subpart_card}>
                    {Array.isArray(this.props.ans) ? this.props.ans.map((ans) => <Checkbox answer={ans} parentCallback = {rubric=> this.updateRubric(rubric)}/>) :  <p>No answer in the database, we are sorry for the inconvenience</p>}
                </div>
            </>
        )
    }
}