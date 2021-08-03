import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Rubric = require('./Rubric').schema
const marking_scheme_subpart_schema = new Schema({
    part: {
        type: String,
        required: false
    },
    marks: {
        type: String,
        required: false
    },
    subpart: {
        type: [this],
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
module.exports = mongoose.models.MarkingSchemeSubpart || mongoose.model('MarkingSchemeSubpart', marking_scheme_subpart_schema);