import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';
import TextRenderer from './text_renderer'
//import Editor from './text_editor';
import TextEditor from '../text_editor/text_editor';
export default class Subpart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null,
            subparts:[]
        }
    }
    handleCallbackOne = (childData) => {
        this.setState({partNumber:this.props.s.part,
            point: this.props.s.marks,
            ans: childData})
    }
    handleCallbackTwo = (childData) => {
        this.setState({partNumber:this.props.s.part,
            point: this.props.s.marks,
            subparts: this.state.subparts.push(childData)});
    }
    onTrigger = (event) => {
        this.props.parentCallback(this.state);
        event.preventDefault();
    }
    
    render() {
        const {data} = this.state;
        var ans = 0;
        return (
            <div className = {styles.container}>
                <div className={styles.subpart_card}>
                    <p>{`Part ${this.props.s.part}:`}</p>
                    <TextRenderer text={this.props.s.prompt}/>
                    <p>{`Points: ${this.props.s.marks}`}</p>
                    {(this.props.s.subparts.length) == 0 ?
                        <div>
                            <TextEditor parentCallback = {this.handleCallbackOne}/>
                        </div>
                        : 
                        <div>
                            {this.props.s.subparts.map(prompt => <Subpart parentCallback = {this.handleCallbackTwo} s={prompt}/>)}
                            <button onClick={this.onTrigger}>cnjdncjc</button>
                        </div>
                    }
                    {console.log(this.state)}
                </div>
            </div>
        );
    }
}