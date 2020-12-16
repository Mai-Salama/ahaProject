const mongoose = require('mongoose');

const AnnulaLeaves = mongoose.Schema({
    id:{type:String,
    required:true},
    date:{type:Date,
    required:true},
    TAtoCover:{type:String},
    status:{type:Number}
});

module.exports = mongoose.model('AnnulaLeaves', AnnulaLeaves);