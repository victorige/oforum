const mongoose = require('mongoose');

const InfosSchema = new mongoose.Schema({
    idd: {
        type: String,
        unique: true,
        
    },

    daily: {
        type: Number
    },

    month: {
        type: Number
    },

    quizhour: {
        type: Number
    },

    current_session: {
        type: String
    },

    next_session: {
        type: String
    },

    payment_process: {
        type: Number
    },

    payment_pause: {
        type: Number
    },

    
})

module.exports = mongoose.models.Infos || mongoose.model('Infos', InfosSchema);