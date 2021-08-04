import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const question_schema = new Schema({
    board_level: {
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
    subject: {
        type: String,
        required: true
    },
    question_number: { 
        type: Number,
        required: true   
    },
    marks: {
        type: String,
        required: true
    },
    is_MCQ: {
        type: Boolean,
        required: true
    },
    content: {
        type: [Object],
        required: false
    },
    topics: {
        type: [String],
        required: true
    },
    options: {
        type: [Object],
        required: false
    },
    marking_scheme: {
        type: [Object],
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