var express = require('express');
var mongoose= require('mongoose');
var bodyparser= require('body-parser');
var cors= require ('cors');
var path= require ('path'); // importing modules

// assign a varaible name for express
var app= express();
const route= require('./routes/route')

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');  
//on connection
mongoose.connection.on("connected",()=>   
{console.log("connected to database mongodb@27017");});

//on error
mongoose.connection.on("error",(err)=>
{
if(err)   
{console.log("connected to database mongodb@27017");
}
});


//port no
const port  =3000;
 
// adding middlewear
app.use(cors());

//body-parser
app.use(bodyparser.json()); 
//static files
app.use(express.static(path.join(__dirname,'public')));

//add route
app.use('/api', route);// /api/abc tells what to do 
 
//testing server

app.get('/',(req,res)=>
{res.send('footbar');});

app.listen(port,()=>   
{console.log("server started at :"+port)});
