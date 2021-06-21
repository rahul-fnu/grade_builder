import dbConnect from '../../../utils/dbConnect';
import SolvedQuestion from '../../../models/SolvedQuestions';

dbConnect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                let attempts;
                if (req.query) {
                    // TODO pre-process the query
                    attempts = await SolvedQuestion.find(req.query)
                } else {
                    attempts = await SolvedQuestion.find({})
                }
                // console.log(req.query)
                res.status(200).json({success: true, data: attempts})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const attempt = await SolvedQuestion.create(req.body);
                res.status(200).json({success: true, data: attempt});
            } catch (error) {
                // console.log(error)
                res.status(400).json({success: false});
            }
            break;
        case 'PUT':
            try {
                const question = await Question.updateOne(req.body.question, {"$set" : req.body.updated});
                res.json({success: true, data: question});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}