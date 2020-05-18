const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
        
    },

    password: {
        type: String
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },

    confirmemail: {
        type: String,
    },

    referral: {
        type: String,
    },

    phone: {
        type: String,
    },

    accountname: {
        type: String,
    },

    accountnumber: {
        type: String,
    },

    bankname: {
        type: String,
    },

    bankcode: {
        type: String,
    },

    active: {
        type: String
    },

    complete: {
        type: Boolean,
        default: false
    },

    join: { 
        type: Date, 
        default: Date.now 
    },

    ip: { 
        type: String
    },

    token: { 
        type: String
    },

    balance: {
        type: Number
    },

    payout: {
        type: Number
    },

    balancemonth: {
        type: Number
    },

    payoutstatus: {
        type: Number
    },

    quizstatus: {
        type: Number
    },

    quizhour: {
        type: Number
    },

    quiznum: {
        type: Number
    },

    adnum: {
        type: Number
    },

    adclick: {
        type: Number
    },

    adclicktime: { 
        type: Date, 
        default: Date.now 
    },

    share: { 
        type: Number
    },

    sharecode: { 
        type: String
    },

    read: {
        type: Array
    },

    reset: {
        type: String
    }


})

module.exports = mongoose.models.Users || mongoose.model('Users', UsersSchema);