const mongoose=require('mongoose');

const HrMembers=mongoose.Schema({
    id:{type:String,
        required:true,unique:true},
    name:{type:String,
        required:true},

    email:{type:String,
    required:true,
    unique:true},

    password:{type:String,
               required:true,
                default:"123456"},
    salary:{type:Number},
    dayoff:{type:String},
    Gender:{type:String,
             required:true},
    
    annualLeave:{type:Number},

    accidentalLeave:{type:Number},

    maternityLeave:{type:Number},

    sickLeave:{type:Number},
    
    office:{type:String}   
});
module.exports= mongoose.model('HrMembers', HrMembers);