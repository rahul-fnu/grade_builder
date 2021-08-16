import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Component} from 'react'

export default class PopupComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Popup trigger={<button onClick={() => this.props.parentCallback()}> Submit Score</button>} position="right center">
                <div>
                    <p>`Your score on this question was ${this.props.score}`</p>
                    <p>While you wont be able to track your progress yet, your score on this question has been saved on our database 
                        and you will eventually be able to review your old scores and track your progress and learning.</p>
                    <p>Happy Learning :)</p>
                </div>
            </Popup>
        )
    }
}