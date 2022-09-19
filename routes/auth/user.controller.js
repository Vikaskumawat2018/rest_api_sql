const test=require("./reg");
var db_e ="db error";
//const {reg}=require("./reg");

module.exports={
    createUser:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.reg(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });  
    }
}


