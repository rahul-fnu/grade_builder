import { querify, SubjectPage } from ".."
import { useRouter } from 'next/router'

export default function CustomSubjectPage({ questions }) {
    const router = useRouter();
    const { subject_name, board_level } = router.query;
    return <SubjectPage blevel={board_level} sname={subject_name} qs={questions} />
}

CustomSubjectPage.getInitialProps = async (ctx) => {
    const query = querify(ctx.query);

    const res = await fetch(`http://${ctx.req.headers.host}/api/questions?${query}`);
    const questions = (await res.json()).data

    return {
        questions: (questions ? questions : [])
    }
}