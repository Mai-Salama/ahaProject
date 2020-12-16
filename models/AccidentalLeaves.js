const mongoose = require('mongoose');
const { model } = require('./AcademicMember');

const AccidentalLeave = mongoose.Schema({
    id:{type:String,
    required:true},
    date:{type:Date},
    status:{type:Number}
});

module.exports = mongoose.model('AccidentalLeave', AccidentalLeave);