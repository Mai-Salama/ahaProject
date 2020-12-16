const express= require('express');
const mongoose= require ('mongoose'); 
const portal = express();
const PORT = 5000;
portal.listen(PORT,()=>{
    console.log(`this server is running on port ${PORT}`);
});

const Members = require('./models/AcademicMember');
const HrMembers = require('./models/HrMembers');
const ReplacementRequest = require('./models/ReplacementRequest');
const MaternityRequest = require('./models/MaternityRequest');
const CompensationRequest = require('./models/CompensationRequest');
const slotLinkingRequests = require('./models/SlotLinkingRequest');
const Faculties = require('./models/Faculties');
const AnnulaLeave = require('./models/AnnualLeave');
const AccidentalLeave = require('./models/SickLeave');
const SickLeave = require('./models/SickLeave');

//testing here
//wanting to commit
portal.use(express.json());
portal.use(express.urlencoded({extended:false}));

const url = "mongodb+srv://ahaDB:ACLaha123@portal.lrdfl.mongodb.net/ahaDB?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
}
mongoose.connect(url,connectionParams).then(()=>{
    console.log("db is successfuly connected")
}).catch((error)=>{
    console.log(error)
});


portal.get('/login',(req,res)=>{
   res.send(login);  
});

portal.post('/login',(req,res)=>{
    //check if the user exists
    //check el username w el password 
});





