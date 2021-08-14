import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//const Question = require('./Question');

const solved_question_schema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: [Object],
        required: true
    },
    marks_obtained: {
        type: Number,
        required: true
    },
    last_solved: {
        type: Date,
        required: true
    }
})
module.exports = mongoose.models.SolvedQuestion || mongoose.model('SolvedQuestion', solved_question_schema);


