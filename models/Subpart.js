import { truncate } from 'fs/promises';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subpart_schema = new Schema({
    part: {
        type: String,
        required: true
    },
    prompt: {
        type: String,
        required: false
    },
    marks: {
        type: String,
        required: true
    },
    subparts: {
        type: [this],
        required: false
    },
    images: {
        type: [String],
        required: false
    }
});
module.exports = mongoose.models.Subpart || mongoose.model('Subpart', subpart_schema);