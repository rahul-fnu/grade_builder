import mongoose from 'mongoose';
const connection = {};
const uri = process.env.MONGO_URI

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect("mongodb+srv://rahul:test1234@questions.p81ox.mongodb.net/GradeBuilder?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    
}

export default dbConnect;