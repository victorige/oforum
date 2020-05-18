const mongoose = require('mongoose');

const PayoutsSchema = new mongoose.Schema({
    user: {
        type: String,   
    },
    account_name: {
        type: String,   
    },
    account_bank_name: {
        type: String,   
    },
    account_bank: {
        type: String,   
    },
    account_bankcode: {
        type: String,   
    },
    account_number: {
        type: String,   
    },
    amount: {
        type: Number,   
    },
    currency: {
        type: String,   
    },
    reference: {
        type: String,   
    },
    fee: {
        type: String,
    },
    status: {
        type: Number,   
    },
    transferid: {
        type: String,
    },


})

module.exports = mongoose.models.Payouts || mongoose.model('Payouts', PayoutsSchema);