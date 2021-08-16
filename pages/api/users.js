import UserData from '../../models/UserData';
import db_connect from '../../utils/db_connect'

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
                console.log(req.body)
                if (req.body.operation === "CREATE") {
                    const user = await UserData.create(req.body.data);
                    res.status(200).json({success: true, data: user});
                } else if (req.body.operation === "GET") {
                    const users = await UserData.find({email : req.body.data.email})
                    res.status(200).json({success: true, data: users})
                } else if (req.body.operation === "UPDATE") {
                    console.log(req.body)
                    const user = await UserData.replaceOne({_id : req.body.id}, req.body.user);
                    res.status(200).json({success: true, data: user});
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
                console.log(req.body)
                const user = await UserData.updateOne(req.body.data.user, {"$set" : req.body.data.updated});
                res.status(200).json({success: true, data: user});
            } catch (error) {
                console.log(error)
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}