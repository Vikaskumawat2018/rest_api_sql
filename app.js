const express = require('express');
var compression = require('compression');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');

//use
app.use(express.json());
app.use(cors());
app.use(compression());

//names
//routes
const userRoter=require("./routes/auth/user.router");
const product=require("./routes/ product/pro_mid");
//auth
const authRoute =require('./routes/auth/userauth');

//const authRoute =require('./routes/auth/auth');
//app.use("/test","./routes/user.router");


//routes 
//remote address
//app.use("/api/users",userRoter);
app.use("/reg",userRoter);
app.use('/user/',authRoute);
app.use('/product',product);


//test

//local
/*
app.get('/',(req,res)=>{
    res.send('we are on /');
});
*/
    


//server 
app.listen(3000);