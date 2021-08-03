import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const rubric_schema = new Schema({
    point_numer: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    answer: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: false
    }
});
module.exports = mongoose.models.Rubric || mongoose.model('rubric_schema', rubric_schema);