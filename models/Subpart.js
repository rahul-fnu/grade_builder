import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subpart_schema = new Schema({
    part: {
        type: String,
        required: false
    },
    prompt: {
        type: String,
        required: false
    },
    marks: {
        type: String,
        required: false
    },
    subparts: {
        type: [this],
        required: true
    },
    images: {
        type: [String],
        required: false
    }
});
module.exports = mongoose.models.Subpart || mongoose.model('Subpart', subpart_schema);