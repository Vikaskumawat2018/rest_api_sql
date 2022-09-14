const test=require("./reg");
//const {reg}=require("./reg");

module.exports={
    createUser:(req,res)=>{
        const body=req.body;
        test.reg(body,(err,results)=>{
            if(err){
                console.log("db error");
                return res.status(500).send(err);
            }
            return res.status(200).send("ok");
        });
        
    }
}



