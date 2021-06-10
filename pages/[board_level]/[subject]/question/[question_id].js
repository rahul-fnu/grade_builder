//import styles from '../../../../styles/Question.module.css';
import {useRouter} from 'next/router';
import Header from '../../../../react_components/question_components/header_card';
import Prompt from '../../../../react_components/question_components/prompt_card';
"www.gradebuilder.com/caie-a-levels/maths/2020/1234567"

// pass in question argument 
export default function Question() {
    // Retrieve question here
    /* if (!question) {
        const router = useRouter();    
        router.query = {year: 2020, question_id: 1234567, subject: "maths", board_level:"caie-a-level"};
        question = getQuestion()
    } */
    return (
        <>
            <Header q = {que[0]}></Header>
            <div>
                {que[0].content.map(prompt => <Prompt p = {prompt} />)}
            </div>
        </>
    );
}

var que = [
    {
        question_number:1,
        marks:10,
        is_MCQ:false,
        year:2020,
        component_region:13,
        exam_period:"June 2021",
        content:[
            {prompt: "First line of content", part: 'a', marks: 5}, 
            {prompt: "Second line of content", part: 'b', marks: 69}
        ],
        topics:["First topic", "Second topic", "Third topic"],
        options:["Yes", "No"],
        answer:["Maybe"]
    }
];