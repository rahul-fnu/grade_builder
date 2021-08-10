import mongoose from 'mongoose'
const Schema = mongoose.Schema;
//const SolvedQuestion = require('SolvedQuestion');
//const Question = require('Question');

const user_data_schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: false
    },
    client_id: {
        type: String,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    questions_solved: {
        type: [Object],
        required: false
    },
    years_solved: {
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