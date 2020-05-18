const mongoose = require('mongoose');

const FingerprintsSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        lowercase: true   
    },

    fingerprint: {
        type: Number
    },

    time: {
        type: Date
    },

    
})

module.exports = mongoose.models.Fingerprints || mongoose.model('Fingerprints', FingerprintsSchema);