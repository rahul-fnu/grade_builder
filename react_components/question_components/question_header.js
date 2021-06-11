import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AppBar, Tabs, Tab, TabPanel, MuiThemeProvider }  from 'material-ui';

export default class QuestionHeader extends Component {
    render() {
        return(
            <nav>
                <div className = "container container-fluid">
                    <button>Expert Solution</button>
                    <button>Marking Scheme</button>
                    <button>Save</button>
                    <button>Submit</button>
                </div>
            </nav>
        );
    }
}