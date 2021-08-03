import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MarkingSchemeSubpart = require('./MarkingSchemeSubpart').schema
const Rubric = require('./Rubric').schema
const marking_scheme_schema = new Schema({
    question_number: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    subpart: {
        type: [MarkingSchemeSubpart],
        required: false
    },
    answer: {
        type: [Rubric],
        required: false
    },
    images: {
        type: [String],
        required: false
    }
});
module.exports = mongoose.models.MarkingScheme || mongoose.model('MarkingScheme', marking_scheme_schema);