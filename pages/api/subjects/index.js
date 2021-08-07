import db_connect from '../../../utils/dbConnect';
import Subject from '../../../models/Subject';

db_connect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const subjects = await Subject.find(req.body)
                res.status(200).json({success: true, data: subjects})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const subject = await Subject.create(req.body);
                res.status(200).json({success: true, data: subject});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'PUT':
            try {
                const subject = await Subject.updateOne(req.body.subject, {"$set" : req.body.updated});
                res.status(200).json({success: true, data: subject});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}