const test=require("./operation");
var db_e ="db error";
//const {reg}=require("./reg");

module.exports={
    create:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.add(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    },

    delete1:(req,res)=>{
        const body=req.body.id;
        //test.reg(body,(err,results)=>{
            test.delete1(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    },

    update1:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.update1(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    }




    
}
