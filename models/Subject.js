import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const subject_schema = new Schema({
    subject_code: {
        type: Number,
        required: true
    },
    subject_name: {
        type: String,
        required: true
    },
    topics: {
        type: [String],
        required: true
    }
});
module.exports = mongoose.models.Subject || mongoose.model('Subject', subject_schema);