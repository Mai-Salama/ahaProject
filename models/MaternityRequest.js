const mongoose = require('mongoose');

const MaternityRequest = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    document:{type:String,required:true},
    status:{type:Number},
   
});
module.exports= mongoose.model('MaternityRequest', MaternityRequest);
