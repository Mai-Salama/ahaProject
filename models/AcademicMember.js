
const mongoose = require('mongoose');

const schedule = mongoose.Schema({
    day:{type:String,
    required:true},
    first:{type:Object},
    second:{type:Object},
    third:{type:Object},
    fourth:{type:Object},
    fifth:{type:Object},
});

//module.exports= mongoose.model('Schedule', schedule);
//const schedule = require('./Schedule');
const members = mongoose.Schema({
    id:{type:Number,
        required:true,
        unique:true
    },
    name:{type:String,
    required:true},
    gender:{type:String,
    required:true},
    email:{type:String,
        required:true,
        unique:true
    },
    password:{type:String,
    required:true,
default:"123456"},
salary:{type:Number},
dayoff:{type:String},
annualLeave:{type:Number},
accidentalLeave:{type:Number},
maternityLeave:{type:Number},
sickLeave:{type:Number},
scheduleFlag:{type:Boolean},
office:{type:String},
defaultSchedule: schedule,
nextWeekUpdated: schedule,
thisWeekUpdated: schedule
     
});
//export schema as a model
module.exports= mongoose.model('Members', members);