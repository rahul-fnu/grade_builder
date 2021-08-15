import React, {Component} from 'react';
import Checkbox from './checkbox';
import styles from '../../styles/Question.module.css'
import NewTextRenderer from './text_renderer_new';
export default class CheckboxBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points:0,
            rubrics: {}
        }
    }

    updateRubric(rubric) {
        if (rubric.correct) {
            const obj = this.state.rubrics;
            obj[rubric.point_number] = parseInt(rubric.marks);
            const points = this.calculatePoints(obj);
            this.setState({rubrics: obj});
            this.setState({points: points});
        } else {
            const obj = this.state.rubrics;
            const keys = Object.keys(obj)
            if (Object.keys(obj).includes(rubric.point_number)) {
                obj[rubric.point_number] = 0;
            }
            const points = this.calculatePoints(obj);
            this.setState({rubrics: obj});
            this.setState({points: points});
        }
        this.props.parentCallback(this.state.points);
    }
    calculatePoints(points) {
        var sum = 0;
        for (let val in Object.keys(points)) {
            sum += parseInt(points[val]);
        }
        return sum;
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