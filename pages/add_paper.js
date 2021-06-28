import React from 'react';
import {Component} from 'react';

export class AddPaperPage extends Component {
    constructor(props) {
        super(props);   
    }

    render(){
      return (
        <div>
            <form>

                <label>
                    Board Level:
                    <select id="board_level">
                        <option value="" disabled selected>Select board level</option>
                        <option value="a_level">A levels</option>
                    </select>
                </label><br/>

                <label>
                    Subject:
                    <select id="subject">
                        <option value="" disabled selected>Select Subject</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="maths">Maths</option>
                        <option value="economics">Economics</option>
                    </select>         
                </label><br/>

                <label>
                    Exam Period:
                    <input id="exam_period" type="text" placeholder="June2020" />
                </label><br/>

                <label>
                    Component Region:
                    <input type="text" name="name" />
                </label><br/>

                <label>
                    MCQ:
                    <input
                        name="isGoing"
                        type="checkbox"
                        defaultChecked={false}/>
                </label><br/>

                <input type="button" value="Add question" onClick={'#'}/><br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
}

export default function AddPaper({data}){
    return <AddPaperPage q={data.questions} u= {data.users}></AddPaperPage>
}

AddPaper.getInitialProps = async (context) => {
    const res1 = await fetch('http://localhost:3000/api/questions');
    const res2 = await fetch('http://localhost:3000/api/users');
    const questions = (await res1.json()).data
    const users = (await res2.json()).data
    return {
        data: {questions: questions, users: users} 
    }
}