import db_connect from '../../../utils/db_connect';
import Question from '../../../models/Question';

db_connect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const questions = await Question.find({})
                res.status(200).json({success: true, data: questions})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                console.log(req.body)
                const question = await Question.create(req.body);
                res.status(200).json({success: true, data: question});
            } catch (error) {
                console.log(error)
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