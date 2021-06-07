import dbConnect from '../../../utils/dbConnect';
import Question from '../../../models/Question';

dbConnect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const questions = await Question.find(req.body)
                res.status(200).json({success: true, data: questions})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const question = await Question.create(req.body);
                res.status(200).json({success: true, data: question});
            } catch (error) {
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