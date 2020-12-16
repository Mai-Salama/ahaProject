const mongoose = require('mongoose');

const SickLeave = mongoose.Schema({
    id:{type:String,
    required:true},
    date:{type:Date},
    status:{type:Number}
});

module.exports = mongoose.model('SickLeave', SickLeave);