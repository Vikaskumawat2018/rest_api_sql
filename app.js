const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
app.use(cors());

//DBconnect
mongoose.connect(process.env.DB_CONNECTION_LOCAL,()=>
console.log("connected to DB")
);

//DBconnect test


//auth
const authRoute =require('./routes/auth/userauth');

//names
//const posts =('./');


//routes 

//remote address
app.use('/api/user',authRoute);

//test
//app.use('/posts','./');
//app.use('posts','./routes/posts')


//local
app.get('/',(req,res)=>{
    res.send('we are on /');
})

    


//server 
app.listen(3000);