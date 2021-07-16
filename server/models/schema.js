const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    picture: {
        type: String
    },
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