const express= require('express');
const mongoose= require ('mongoose'); 
const portal = express();
const PORT = 5000;
portal.listen(PORT,()=>{
    console.log(`this server is running on port ${PORT}`);
});

const Members = require('./models/AcademicMember');


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