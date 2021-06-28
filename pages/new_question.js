import React from 'react';
import {Component} from 'react';
import Multiselect from 'multiselect-react-dropdown';

export class AddQuestionPage extends Component {
    constructor(props) {
        super(props);   
    }

    render(){
      return (
        <div>
            <form>
                <label>
                    Question No.
                    <input type="text" id="question_number" />
                </label><br/>

                <label>
                    Marks: 
                    <input type="text" id="marks" />
                </label><br/>
                
                <label>
                    Topics: 
                    <Multiselect options={'physics'}/>
                    <input type="text" id="topics" />
                </label><br/>

                <label>
                    Text: 
                    <input type="text" id="marks" />
                </label><br/>

                <label>
                    Prompt: 
                    <input type="text" id="prompt" />
                </label><br/>

                <label>
                    Mark Scheme: 
                    <input type="text" id="mark_scheme" />
                </label><br/>

                <label>
                    Upload image: 
                    <input type="file" id="image" />
                </label><br/>

                <input type="button" value="Add subpart" onClick={'#'}/><br/>
            </form >
        </div>
      );
    }
}

export default function AddQuestion({data}){
    return <AddQuestionPage q={data.questions} u= {data.users}></AddQuestionPage>
}

AddQuestion.getInitialProps = async (context) => {
    const res1 = await fetch('http://localhost:3000/api/questions');
    const res2 = await fetch('http://localhost:3000/api/users');
    const questions = (await res1.json()).data
    const users = (await res2.json()).data
    return {
        data: {questions: questions, users: users} 
    }
}