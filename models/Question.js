import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//const Subject = require('../models/Subject');

const question_schema = new Schema({
    board_level: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    exam_period: {
        type: String,
        required: true
    },
    component_region: { 
        type: Number,
        required: true
    },
    question_number: { 
        type: Number,
        required: true   
    },
    text: {
        type: String,
        required: false
    },
    marks: {
        type: Number,
        required: true
    },
    content: {
        type: [Object], 
        required: true
    },
    topics: {
        type: [String],
        required: true
    },
    options: {
        type: [String],
        required: false
    },
    expert_solution: {
        type: [Object],
        required: true
    },
    marking_scheme: {
        type: [Object],
        required: true
    }
});

module.exports = mongoose.models.Question || mongoose.model('Question', question_schema);
