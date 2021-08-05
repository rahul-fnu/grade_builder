import React, { Component } from 'react';
import styles from '../../styles/Question.module.css';


export default class ImageRender extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         images = this.props.images,
    //     }
    // }
    validateImageUrl = (url) => {
        return "https://drive.google.com/uc?export=view&id=" + url.split('/')[5];
    }
    render() {
        return (
            <div className={styles.row}>
                {this.props.images.map(image => (
                    <div className={styles.column}>
                        <img src={this.validateImageUrl(image)} width="400" height="300"/>
                        <br/>
                    </div>
                ))}
            </div>
        )
    }
}