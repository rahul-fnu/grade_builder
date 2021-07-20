import { style } from "@material-ui/system";
import React, { Component} from "react";
import Popup from '../../node_modules/reactjs-popup'
import '../../node_modules/reactjs-popup/dist/index.css'
import styles from  '../../styles/Question.module.css';
import GradingPanel from "./grading_panel";
export default class Modal extends Component {
    render() {
        return (
            <Popup
            trigger={<button className="button"> Submit </button>}
            modal
            nested
          >
            {close => (
              <div className={styles.modal}>
                <button className={styles.modal_close} onClick={close}>
                  &times;
                </button>
                <div className={styles.modal_header}> Modal Title </div>
                <div className={styles.modal_content}>
                  {console.log(this.props)}
                  <GradingPanel ms = {this.props.ms} part = {this.props.part} ans = {this.props.ans} />
                </div>
                <div className={styles.modal_actions}>
                  <button
                    className="button"
                    onClick={() => {
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        );
    }
}