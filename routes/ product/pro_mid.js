const router = require('express').Router();
const {create,delete1,update1}=require("./product");



router.post("/",create);
router.delete("/",delete1);
router.put("/",update1);




module.exports=router;