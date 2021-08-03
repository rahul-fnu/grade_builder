import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const rubric_schema = new Schema({
    point_numer: {
        type: Number,
        required: false
    },
    marks: {
        type: Number,
        required: false
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