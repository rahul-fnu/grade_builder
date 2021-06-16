import Header from '../../../../react_components/question_components/header_card';
import NavTabs from '../../../../react_components/question_components/question_header';
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
        marks:10,
        is_MCQ:false,
        year:2020,
        component_region:13,
        exam_period:"June 2021",
        content:[
            {prompt: "First line of content", part: 'a', marks: 5, text_area: true , subparts: [{prompt: "First line of content", part: 'a', marks: 420},{prompt: "sex line of content", part: 'a', marks: 69}]}, 
            {prompt: "Second line of content", part: 'b', marks: 69, text_area: false, subparts: []}
        ],
        topics:["First topic", "Second topic", "Third topic"],
        options:["Yes", "No"],
        expert_solution:["frjefvjkegvkvjkfkfvbkfgbgkfbkfgkfgvbfkgbkfv kfb kfvkfvdfjkvkdfvkfgkfgvbjkfbkfgvkfrbjkf vkdernvrkvkfvkfrgvikfrgnknr nvkdrnvkvbnfrkvkfrgvndfkvdf vkfvnkdfvbfkbikfgf vkdvnkdfvnikvbhnkfgbvfgjkbb nfjk frkvn dfrkvikervkerf  bnfkverkfvefrkvkv f fmvbdfkvbndefkvdfkvfkvb nfjkbvikdfvjikfgb nfgjk fjk jkfgvnjkdfvnjkfvnjkdfvnjkdfvbnjfkdvnjkdfvnfjkdvbnjkdfbndfjkvbnjkdfnvbjkdfvnbfjdk vknefrkvnfjkdvbnjfdv jefrvbnfjkeivbnjfkdm v fiovhfkelvnfr rjkvcbnrfjkevbfjkv cvriekcvhrkwefvn jfnerjkfcvnrkcv fkvnfrkvn fjkvnkfrs kerjfhjkfvbj fwerhjikfhfik ifhjikerhfirhfg ojfgorjfor iojoeijdikedjn fihrifhri ifhikrhfr fihrikfhr firehfikr fierhfkre jenfbjkerfb ifhierfbn ifhrifhr fierhifr fjibrifbr firhifr fhri"],
        marking_scheme: ["(2) Oh yeah daddy", "(2) Oh yeahhhhhhhhhh", "(1) spread itttt"]
    }
];