const router = require('express').Router();
const {create,delete1}=require("./product");



router.post("/add",create);
router.delete("/del",delete1);



module.exports=router;