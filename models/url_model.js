const mongoose = require('mongoose');
const shorid = require('shortid');

const Schema = new mongoose.Schema({
    fullurl_s:{
        type: String,
        required: true
    },
    shorturl_s:{
        type: String,
        required: true,
        default: shorid.generate
    },
    clicks_s:{
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('url_model',Schema);