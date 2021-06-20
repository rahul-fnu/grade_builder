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
var text  = "Two very small metal spheres X and Y are connected by an insulating rod of length $72 mm$. A side view of this arrangement is shown in Fig. 4.1. Sphere X has a charge of +3$\\textit{e}$ and sphere Y has a charge of –3$\\textit{e}$, where $\\textit{e}$ is the elementary charge. The rod is held at its mid point Z at an angle $\\theta$ to the horizontal. The rod and spheres have negligible mass and are in a uniform electric field. The electric field strength is $5.0$ × $10^4$ $V.m^–1$. The direction of this field is vertically upwards."
var que = [
    {
        question_number:1,
        marks:7,
        //is_MCQ:false,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "",
        content:[
            {prompt: "The ampere, metre and second are SI base units.\n State two other SI base units.", part: 'a', marks: 2, text_area: true , subparts: []}, 
            {prompt: "The average drift speed v of electrons moving through a metal conductor is given by the equation: \n\n $\\textit{v = $\\frac{\\mu * F}{e}$}$ \n where $\\textit{e}$ is the charge on an electron \n $\\textit{F}$ is a force acting on the electron \n and $\\textit{$\\mu$}$ is a connstant. \n Determine the SI base units on the electron", part: 'b', marks: 5, text_area: false, subparts: []}
        ],
        topics:["SI units"],
        options:[],
        expert_solution:[],
        marking_scheme: [{part: 'a', answer: ["kilogram / kg (1)", "kelvin / K (1)"], subparts: []}, {part: 'b', answer: ["units for v: $m.s^–1$ and units for F: $kg.m.s^–2$ (1)", "units for $\\textit{e}$: A s (1)", "units for $\\mu$: $m.s^–1$ A s / kg $m.s^-2$ = A $kg^–1$ $s^2$ (1)"], subparts: []}]
    }, 
    {
        question_number:2,
        marks:11,
        //is_MCQ:false,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "",
        content:[
            {prompt: "Define", part: 'a', marks: 2, text_area: true , subparts: [{prompt: "Displacement", part: 'i', marks: 1, subparts: []}, {prompt: "acceleration ", part: 'ii', marks: 1, subparts: []}]}, 
            {prompt: "A man wearing a wingsuit glides through the air with a constant velocity of $47 m.s^–1$ at an angle of 24° to the horizontal. The path of the man is shown in Fig. 2.1. The total mass of the man and the wingsuit is 85 kg. The man takes a time of 2.8 minutes to glide from point A to point B.", part: 'b', marks: 9, text_area: true, subparts: [{prompt: "With reference to the motion of the man, state and explain whether he is in equilibrium.", part: 'i', marks: 2, subparts: []}, {prompt: "Show that the difference in height $\\textit{h}$ between points A and B is 3200 m.", part: 'ii', marks: 1, subparts: []}, {prompt: " For the movement of the man from A to B, determine:", part: 'iii', marks: 4, subparts: [{prompt: "Decrease in potential energy", part: '1', marks: 2, subparts: []}, {prompt: "the magnitude of the force on the man due to air resistance.", part: '2', marks: 2, subparts: []}]}, {prompt: "The pressure of the still air at A is 63 kPa and at B is 92 kPa. Assume the density of the air is constant between A and B. Determine the density of the air between A and B.", part :'iV', marks: 2, subparts: []}]}
        ],
        topics:["Kinemtics"],
        options:[],
        expert_solution:[],
        marking_scheme: [{part: 'a', answer:[], subparts: [{part: 'i', answer:['distance in a specified direction (from a point) (1)'], subparts: []}, {part: 'ii', answer:['distance in a specified direction (from a point) (1)'], subparts: []}]},
                        {part: 'b', answer:[], subparts: [{part: 'i', answer:['constant velocity so no resultant force (1)', 'no resultant force so in equilibrium(1)'], subparts: []}, 
                            {part: 'ii', answer:['47 × 2.8 × 60 × $\\sin(24)$ = 3200 m (1)'], subparts: []}]},
                            {part: 'iii', answer:[ '$\\delta$ E = mg$\\delta$h= 85 × 9.81 × 3200 (1)', '= 2.7 × $10^6$ J (1)', 'In terms of energy: \n work done = 2.7 × $10^6$ J \n force = 2.7 × $10^6$ \n / (47 × 2.8 × 60) \n Or \\linebreak In terms of forces: component of weight along path = force due to air resistance force = 85 × 9.81 × $\\sin(24)$ (1)', '= 340 N (1)'], subparts: []},
                            {part: 'iv', answer:['\\Delta p = $\\rho$ x g x $\\Delta$ h = (92 – 63) × 103 = $\\rho$ × 9.81 × 3200 (1)', '$\\rho$ = 0.92 kg$m^–3$ (1)'], subparts: []}                  
                        ]
        },
    {
        question_number: 3,
        marks: 6,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "Two balls, X and Y, move along a horizontal frictionless surface, as illustrated in Fig. 3.1. Ball X has an initial velocity of 3.0 $m.s^–1$ in a direction along line AB. Ball Y has a mass of 2.5 kg and an initial velocity of 9.6 $m.s–1$ in a direction at an angle of 60° to line AB. The two balls collide at point B. The balls stick together and then travel along the horizontal surface in a direction at right-angles to the line AB, as shown in Fig. 3.2.",
        content:[
            {prompt: "By considering the components of momentum in the direction from A to B, show that ball X has a mass of 4.0 kg.", part: "a", marks: 2, subparts: []}, 
            {prompt: " Calculate the common speed V of the two balls after the collision.", part: "b", marks: 2, subparts: []}, 
            {prompt: "Determine the difference between the initial kinetic energy of ball X and the initial kinetic energy of ball Y.", part: "c", marks:2, subparts: []}
        ],
        topics:["momentum"],
        options:[],
        expert_solution:[],
        marking_scheme:[""]
    },
    {
        question_number: 4,
        marks: 9,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "",
        content:[
            {prompt: "Define electric field strength.", part: "a", marks: 1, subparts: []},
            {prompt: "Two very small metal spheres X and Y are connected by an insulating rod of length $72 mm$. A side view of this arrangement is shown in Fig. 4.1. Sphere X has a charge of +3$\\textit{e}$ and sphere Y has a charge of –3$\\textit{e}$, where $\\textit{e}$ is the elementary charge. The rod is held at its mid point Z at an angle $\\theta$ to the horizontal. The rod and spheres have negligible mass and are in a uniform electric field. The electric field strength is $5.0$ × $10^4$ $V.m^–1$. The direction of this field is vertically upwards.", part: "b", marks: 8, subparts: [
                {prompt: "The electric field is produced by applying a potential difference of 4.0 kV between two charged parallel metal plates.", part: 'i', marks: 4, subparts: [
                    {prompt: "Calculate the separation between the plates.", part: '1', marks: 2, subparts: []}, 
                    {prompt: "Describe the arrangement of the two plates. Include in your answer a statement of the sign of the charge on each plate. You may draw on Fig. 4.1.", marks: 2, subparts: []}
                ]}, 
                {prompt: "Determine the magnitude and direction of the force on sphere Y", part: 'ii', marks: 2, subparts: []},
                {prompt: "The electric forces acting on the two spheres form a couple. This couple acts on the rod with a torque of $6.2$ × $10^-16$ $N.m$. Calculate the angle $\\theta$ of the rod to the horizontal.", part:  'iii', marks: 2, subparts:[]}
            ]}
            
        ],
        topics:["elecrtricty"],
        options:[],
        expert_solution:[],
        marking_scheme:[""]
    },
    {
        question_number: 5,
        marks: 10,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "",
        content:[
            {prompt: "By reference to two waves, state:", part: "a", marks: 3, subparts: [
                {prompt: "the principle of superposition", part: 'i', marks: 2, subparts: []},
                {prompt: "the principle of superposition", part: 'ii', marks: 1, subparts: []}
            ]},
            {prompt: "Two coherent waves P and Q meet at a point in phase and superpose. Wave P has an amplitude of 1.5 cm and intensity $\\textit{I}$. The resultant intensity at the point where the waves meet is 3$\\textit{I}$. Calculate the amplitude of wave Q.", part: 'b', marks: 2, subparts: []},
            {prompt: "The apparatus shown in Fig. 5.1 is used to produce an interference pattern on a screen. Light of wavelength 680 nm is incident on a double-slit. The slit separation is a. The separation between adjacent fringes is $\\textit{x}$. Fringes are viewed on a screen at distance $\\textit{D}$ from the double-slit. Distance $\\textit{D}$ is varied from 2.0 m to 3.5 m. The variation with $\\textit{D}$ of $\\textit{x}$ is shown in Fig. 5.2.", part: 'c', marks: 5, subparts:[
                {prompt: "Use Fig. 5.2 to determine the slit separation $\\textit{a}$", part: 'i', marks: 3, subparts: []},
                {prompt: "The laser is now replaced by another laser that emits light of a shorter wavelength. On Fig. 5.2, sketch a possible line to show the variation with $\\textit{D}$ of $\\textit{x}$ for the fringes that are now produced.", part: 'ii', marks:2, subparts: []}
            ]}
        ],
        topics:["waves"],
        options:[],
        expert_solution:[],
        marking_scheme:[""]
    },
    {
        question_number: 6,
        marks: 13,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "",
        content:[
            {prompt: "Using energy transformations, describe the $\\textit{electromotive force (e.m.f.)}$ of a battery and the $\\textit{potential difference (p.d.)}$ across a resistor.", part: "a", marks: 2, subparts: []},
            {prompt: "A battery of e.m.f. 6.0 V and negligible internal resistance is connected to a network of resistors and a voltmeter, as shown in Fig. 6.1. Fig. 6.1 Resistor Y has a resistance of 24 $\\Omega$ and resistor Z has a resistance of 32 $\\Omega$.", part: 'b', marks: 11, subparts: [
                {prompt: "The resistance $R_X$ of the variable resistor $\\textit{X}$ is adjusted until the voltmeter reads 4.8 V. Calculate:", part: 'i', marks:9, subparts: [
                    {prompt: "the current in resistor Z", part : 1, marks: 1, subparts: []},
                    {prompt: "the total power provided by the battery", part: 2, marks: 2, subparts: []},
                    {prompt: "the number of conduction electrons that move through the battery in a time interval of 25s", part: 3, marks: 2, subparts: []},
                    {prompt: "the total resistance of X and Y connected in parallel", part: 4, marks: 2, subparts: []},
                    {prompt: "the resistance $R_X$.", part: 5, marks: 2, subparts: []}
                ]},
                {prompt: "The resistance $R_X$ is now decreased. State and explain the change, if any, to the reading on the voltmeter.", part: 'ii', marks: 2, subparts:[]}
                ]
            }    
        ],
        topics:["electricity"],
        options:[],
        expert_solution:[],
        marking_scheme:[""]
    },
    {
        question_number: 7,
        marks:6,
        year:2019,
        component_region:22,
        exam_period:"March 2019",
        text: "",
        content:[
            {prompt: "The names of four particles are listed below. \n alpha, beta-plus, neutron, proton \n State the name(s) of the particle(s) in this list that:", part: "a", marks: 3, subparts: [
                {prompt: "are not fundamental", part: "i", marks: 1, subparts: []},
                {prompt: "do not experience an electric force when situated in an electric field", part: "ii", marks: 1, subparts: []},
                {prompt: "has the largest ratio of charge to mass.", part: "iii", marks: 1, subparts: []}
            ]},
            {prompt: "A hadron has a charge of +$\\textit{e}$ where  $\\textit{e}$ is the elementary charge. The hadron is composed of only two quarks. One of thesequarks is an antidown	$(\\bar{d})$ quark.	By	considering	charge,	state and explain the name (flavour) of the other quark.", part: "b", marks: 3, subparts: []}  
        ],
        topics:["electricity"],
        options:[],
        expert_solution:[],
        marking_scheme:[""]
    }
];
