//const { result } = require("@hapi/joi/lib/base");
const pool = require("../../database");
const router =require('express').Router();

router.post('/',async(req,res)=>{
    //validate using joi(schema)
    //const {error} = validation.val_user.validate(req.body);
    //res.send(error.details);
    //res.send(error.details[0].message);
    //if(error) return res.status(400).send(error.details[0].message);
    
    try{
        //insert
        //const data={}
        pool.query(
            `INSERT INTO nameinfo (f_name,mid_name,last_name) VALUES (?,?,?);`,
            [
                req.f_name,
                req.mid_name,
                req.last_name
            ]
            
        );  
        res.send("ok");
    }catch(err)
    {
        res.status(400).send( err );
    }
});




//module.exports =auth_q;







