const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    title: {
        type: String
    },
    platform: {
        type: String
    },
    price: {
      type: String
    },
    time: {
      type: String
    }
}, {
        collection: 'restaurants'
    })

module.exports = mongoose.model('User', userSchema)