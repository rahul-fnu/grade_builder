import Header from '../../../../react_components/question_components/header_card';
import NavTabs from '../../../../react_components/question_components/question_header';

export default function Question({ question }) {
    return (
        <>
            <Header q = {question}></Header>
            <NavTabs ques = {question}></NavTabs>
        </>
    );
}


Question.getInitialProps = async (ctx) => {
    const res = await fetch(`http://${ctx.req.headers.host}/api/questions?_id=${ctx.query.question_id}`);
    const question = (await res.json()).data

    console.log(question)

    return {
        question: question
    }
}
