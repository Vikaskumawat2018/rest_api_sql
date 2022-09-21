const router = require('express').Router();
const {create,delete1,update1,get_items,er,details}=require("./product");

//product opration
router.get("/",er);
router.post("/",create);
router.delete("/",delete1);
router.put("/",update1);

//product info
router.post("/item",get_items);
router.post("/item/detail",details);


module.exports=router;