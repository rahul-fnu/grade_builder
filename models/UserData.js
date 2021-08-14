import mongoose from 'mongoose'
const Schema = mongoose.Schema;
// const Question = require('./Question');
// const SolvedQuestion = require('./SolvedQuestions');

const user_data_schema = new Schema({
    email: {
        type: String,
        required: true
    },
    questions_solved: {
        type: [Object],
        required: false
    },
    questions_todo: {
        type : [Object],
        required: false
    }
});

const UserData = mongoose.models.UserData || mongoose.model('UserData', user_data_schema);
module.exports = UserData;