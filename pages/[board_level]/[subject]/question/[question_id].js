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
            <Header q = {que[1]}></Header>
            <NavTabs ques = {que[1]}></NavTabs>
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
            {prompt: "The average drift speed v of electrons moving through a metal conductor is given by the equation: \n\n $\\textit{v = $\\frac{\\mu * F}{e}$}$ \n where $\\textit{e}$ is the charge on an electron \n $\\textit{F}$ is a force acting on the electron \n and $\\textit{$\\mu$}$ is a connstant. \n Determine the SI base units on the electron", part: 'b', marks: 5, text_area: false, subparts: []}
        ],
        topics:["SI units"],
        options:[],
        expert_solution:[],
        marking_scheme: [""]
    }, 
    {
        question_number:2,
        marks:11,
        //is_MCQ:false,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        content:[
            {prompt: "Define", part: 'a', marks: 2, text_area: true , subparts: [{prompt: "Displacement", part: 'i', marks: 1, subparts: []}, {prompt: "acceleration ", part: 'ii', marks: 1, subparts: []}]}, 
            {prompt: "A man wearing a wingsuit glides through the air with a constant velocity of $47 m.s^–1$ at an angle of 24° to the horizontal. The path of the man is shown in Fig. 2.1. The total mass of the man and the wingsuit is 85 kg. The man takes a time of 2.8 minutes to glide from point A to point B.", part: 'b', marks: 9, text_area: true, subparts: [{prompt: "With reference to the motion of the man, state and explain whether he is in equilibrium.", part: 'i', marks: 2, subparts: []}, {prompt: "Show that the difference in height $\\textit{h}$ between points A and B is 3200 m.", part: 'ii', marks: 1, subparts: []}, {prompt: " For the movement of the man from A to B, determine:", part: 'iii', marks: 4, subparts: [{prompt: "Decrease in potential energy", part: '1', marks: 2, subparts: []}, {prompt: "the magnitude of the force on the man due to air resistance.", part: '2', marks: 2, subparts: []}]}, {prompt: "The pressure of the still air at A is 63 kPa and at B is 92 kPa. Assume the density of the air is constant between A and B. Determine the density of the air between A and B.", part :'iV', marks: 2, subparts: []}]}
        ],
        topics:["Kinemtics"],
        options:[],
        expert_solution:[],
        marking_scheme: [""]
    }
];
