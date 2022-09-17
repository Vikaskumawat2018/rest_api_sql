const {createUser}=require("./auth/user.controller");
const router=require("express").Router();


router.post("/",createUser);
//router.post();

module.exports=router;