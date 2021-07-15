import { style } from "@material-ui/system";
import React, { Component} from "react";
import Popup from '../../node_modules/reactjs-popup'
import '../../node_modules/reactjs-popup/dist/index.css'
import styles from  '../../styles/Question.module.css';

export default class Modal extends Component {
    render() {
        return (
            <Popup
            trigger={<button className="button"> Open Modal </button>}
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
                  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                  Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                  delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                  commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                  explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
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