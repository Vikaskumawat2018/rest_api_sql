const { wishlist } = require("./operation");
const test=require("./operation");
var db_e ="db error";
//const {reg}=require("./reg");

module.exports={

    er:(req,res)=>{
            res.send(404); 
    },

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
    },

    get_items:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.get_items(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    },

    details:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.details(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    },

    cart:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.cart(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    },

    cartadd:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.cartadd(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    },

    wishlist:(req,res)=>{
        const body=req.body;
        //test.reg(body,(err,results)=>{
            test.wishlist(body,(err,results)=>{
            if(err){
                console.log(db_e);
                return res.status(500).send(err);
            }
            return res.status(200).send(results);
        });   
    }
    
}
