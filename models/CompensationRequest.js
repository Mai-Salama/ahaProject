const mongoose = require('mongoose');

const CompensationRequest = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    absenceDate:{type:String, required:true},
    acceptanceStatus:{type:Number},
   
});
module.exports= mongoose.model('CompensationRequest', CompensationRequest);
