const mongoose = require('mongoose');

const BanksSchema = new mongoose.Schema({
    Id: {
        type: String,
        unique: true,
        lowercase: true   
    },
    Code: {
        type: String,
        lowercase: true   
    },
    Name: {
        type: String,
        lowercase: true   
    },
    IsMobileVerified: {
        type: String,
        lowercase: true   
    },
    branches: {
        type: String,
        lowercase: true   
    },

})

module.exports = mongoose.models.Banks || mongoose.model('Banks', BanksSchema);