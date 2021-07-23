import React, { Component, useState } from 'react';
import styles from '../styles/Admin.module.css'
import TextEditor from '../Components/text_editor';

export default class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className = {styles.question_card}>
                <ul>
                    {Object.entries(this.props.images).map(([k,v]) => 
                        <div>
                            <p>`${v}`</p>
                            <button onClick={this.props.parentCallback(k)}>Delete</button>
                        </div>)
                    }
                </ul>
            </div>
        )
    }
}