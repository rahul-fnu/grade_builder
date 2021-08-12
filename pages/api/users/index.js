import db_connect from '../../../utils/db_connect';
import UserData from '../../../models/UserData';

db_connect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        // case 'GET':
        //     try {
        //         const users = await UserData.find(req.body)
        //         res.status(200).json({success: true, data: users})
        //     } catch (error) {
        //         res.status(400).json({success: false});
        //     }
        //     break;
        case 'GET':
            try {
                const users = await UserData.find({email : req.body})
                res.status(200).json({success: true, data: users})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                if (req.body.operation == "CREATE") {
                    const user = await UserData.create(req.body.data);
                    res.status(200).json({success: true, data: user});
                } else if (req.body.operation == "GET") {
                    const users = await UserData.find({email : req.body.data})
                    res.status(200).json({success: true, data: users})
                } else {
                    res.status(400).json({success: false});
                }
            } catch (error) {
                console.log(error)
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