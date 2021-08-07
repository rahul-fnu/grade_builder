import db_connect from '../../utils/db_connect';
import UserData from '../../models/UserData';

db_connect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const users = await UserData.find(req.body)
                res.status(200).json({success: true, data: users})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const user = await UserData.create(req.body);
                res.status(200).json({success: true, data: user});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'PUT':
            try {
                const user = await UserData.updateOne(req.body.user, {"$set" : req.body.updated});
                res.status(200).json({success: true, data: user});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}