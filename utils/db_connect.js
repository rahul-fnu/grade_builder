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
        serverSelectionTimeoutMS: 1000000, 
    });
    connection.isConnected = db.connections[0].readyState;
    
}

export default db_connect;