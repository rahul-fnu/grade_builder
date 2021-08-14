// import db_connect from '/Users/rahulraiii/Downloads/utils/db_connect.js';
import UserData from '../../../models/UserData';


import mongoose from 'mongoose';
const connection = {};
const uri = process.env.MONGO_URI

async function db_connect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect("mongodb+srv://rahul:test1234@questions.p81ox.mongodb.net/GradeBuilder?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    
}

// export default db_connect;
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
                console.log(req.body)
                const users = await UserData.find(req.body)
                res.status(200).json({success: true, data: users})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                if (req.body.operation === "CREATE") {
                    const user = await UserData.create(req.body.data);
                    res.status(200).json({success: true, data: user});
                } else if (req.body.operation === "GET") {
                    console.log(req.body)
                    const users = await UserData.find({email : req.body.data.email})
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