import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const option_schema = new Schema({
    option: {
        type: String,
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
module.exports = mongoose.models.Option || mongoose.model('option_schema', option_schema);