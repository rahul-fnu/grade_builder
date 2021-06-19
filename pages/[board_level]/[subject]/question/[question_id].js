import Header from '../../../../react_components/question_components/header_card';
import NavTabs from '../../../../react_components/question_components/question_header';
import {latexParser} from '../../../../node_modules/latex-parser';
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
            <NavTabs ques = {que[0]}></NavTabs>
        </>
    );
}

var que = [
    {
        question_number:1,
        marks:7,
        //is_MCQ:false,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        content:[
            {prompt: "The ampere, metre and second are SI base units.\n State two other SI base units.", part: 'a', marks: 2, text_area: true , subparts: []}, 
            {prompt: "The average drift speed v of electrons moving through a metal conductor is given by the equation: \n $\\textit{v = $\\frac{\\mu * F}{e}$}$ \n where $\\textit{e}$ is the charge on an electron \n $\\textit{F}$ is a force acting on the electron \n and $\\textit{$\\mu$}$ is a connstant. \n Determine the SI base units on the electron", part: 'b', marks: 5, text_area: false, subparts: []}
        ],
        topics:["SI units"],
        options:[],
        expert_solution:[],
        marking_scheme: [""]
    }
];
