const {createUser}=require("./user.controller");
const router=require("express").Router();


router.post("/",createUser);
//router.post();

module.exports=router;