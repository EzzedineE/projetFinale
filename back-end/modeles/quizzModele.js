const mongoose = require('mongoose');

const quizzSchema = mongoose.Schema({
    titre: { type: String, required: true },
    questions: [{
        question: { type: String, required: true },
        bonnereponse: { type: Number, required: true },
        reponses: { type: Array, require: true }
    }],
    answered: { type: Boolean, required: true, default: false },
}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('quizz', quizzSchema);
