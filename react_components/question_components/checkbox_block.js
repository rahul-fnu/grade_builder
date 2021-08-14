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
            // console.log(rubric)
            const obj = this.state.rubrics;
            obj[rubric.point_number] = rubric.marks;
            this.setState({rubrics: obj});
        } else {///
            const obj = this.state.rubrics;
            if (obj.point_number) {
                delete obj.point_number;
            }
            this.setState({rubrics: obj});
        }
        // this.setState({points : this.calculatePoints(this.state.rubrics)})
        const points = this.calculatePoints(this.state.rubrics);
        console.log(points)
        this.props.parentCallback(this.state.points);
    }
    calculatePoints(points) {
        let sum = 0;
        for (let val in Object.values(points)) {
            console.log(val)
            sum += parseInt(val)
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