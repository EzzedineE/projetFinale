const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    image: { type: String, required: false, }

}, { versionKey: false, timestamps: true });
module.exports = mongoose.model('User', userSchema);