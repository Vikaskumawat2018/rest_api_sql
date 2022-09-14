const express = require('express');
const app = express();
//const pool = require('mysql');
//const mysql = require('mysql');
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
app.use(cors());

//DBconnect


//DBconnect test
/*
const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketpath: `${process.env.INSTANCE_CONNECTION_NAME}`,
});
*/

//auth
//const authRoute =require('./routes/auth/userauth');

//names
//const posts =('./');
const userRoter=require("./routes/user.router");


//routes 
//app.use("/api/users",userRoter);
app.use("/reg",userRoter);
//remote address
//app.use('/api/user',authRoute);

//test
//app.use('/posts','./');
//app.use('posts','./routes/posts')


//local
/*
app.get('/',(req,res)=>{
    res.send('we are on /');
});
*/
    


//server 
app.listen(3000);