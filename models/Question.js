import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Subpart = require('./Subpart').schema

const question_schema = new Schema({
    board_level: {
        type: String,
        required: true
    },
    exam_period: {
        type: Date,
        required: true
    },
    component_region: { 
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    question_number: { 
        type: Number,
        required: true   
    },
    marks: {
        type: Number,
        required: true
    },
    is_MCQ: {
        type: Boolean,
        required: true
    },
    content: {
        type: [Subpart],
        required: false
    },
    topics: {
        type: [String],
        required: true
    },
    options: {
        type: [String],
        required: false
    },
    marking_scheme: {
        type: [String],
        required: true
    },
    answer: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: false
    },
    text: {
        type: String,
        required: false
    }
});

module.exports = mongoose.models.Question || mongoose.model('Question', question_schema);