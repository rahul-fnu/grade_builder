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

    updatePoints(score) {
        if (score.correct) {
            const obj = this.state.rubrics;
            obj[score.point_number] = score.marks;
            this.setState({rubrics: obj});
            this.setState({points: this.state.points + score.points});
        } else {
            const obj = this.state.rubrics;
            obj[score.point_number] = null;
            this.setState({rubrics: obj});
            this.setState({points: this.state.points - score.points});
        }
    }
    returnPoints(event) {
        this.props.parentCallback(this.state.points);
        event.preventDefault();

    }
    render() {
        return (
            <>
                <div className = {styles.subpart_card}>
                    {Array.isArray(this.props.ans) ? this.props.ans.map((ans) => <Checkbox answer={ans.answer} parentCallback = {score=> this.updatePoints(score)}/>) :  <p>cdbhbhdc</p>}
                </div>
                <button onClick={this.returnPoints()}>dededde</button>
            </>
        )
    }
}