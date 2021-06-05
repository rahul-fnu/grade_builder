import mongoose from 'mongoose'
const Schema = mongoose.Schema;
//const SolvedQuestion = require('SolvedQuestion');
//const Question = require('Question');

const user_data_schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    questions_solved: {
        type: [String],
        required: false
    },
    years_solved: {
        type: [String],
        required: false
    },
    questions_todo: {
        type : [String],
        required: false
    }
});

const UserData = mongoose.models.UserData || mongoose.model('UserData', user_data_schema);
module.exports = UserData;