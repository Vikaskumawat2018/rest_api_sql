const router =require('express').Router();
const pool = require("../../database");
//const validation=require('../validation');
//const {val_user}=require('../validation');

/*
const Joi =require('@hapi/joi');

//joi validation schema
const val_user = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required()
});

*/

router.post('/register',async(req,res)=>{
    
    const name_data={
        f_name:    req.body.f_name,
        mid_name:  req.body.mid_name,
        last_name: req.body.last_name
    };
    
    try{
        pool.query("INSERT INTO nameinfo set ?" ,name_data,(error, results, fields)=>
        {
             //var res1 = JSON.parse(new Object(results));
             var res1 = results.insertId;
            //console.log(" this is my json " + (JSON.stringify(results)).insertId);
            console.log(res1);
            console.log(results.insertId);
            res.send(results);
        }); 
        
        }catch(err)
        {
            res.status(400).send( err );
        }
        //console.log('before save');
 
});

router.get('/',async(req,res)=>{
try{
    const Users = await User.find();
    res.send(Users);
}
catch(err)
{
    res.send(err)
}
});


module.exports=router;