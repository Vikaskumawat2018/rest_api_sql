const router = require('express').Router();
const {create,delete1,update1,get_items,er,details,cart,wishlist}=require("./product");
const {cartadd}=require("./product");

//product opration
router.get("/",er);
router.post("/",create);//put
router.delete("/",delete1);
router.put("/",update1);//patch

//product info
router.post("/item",get_items);
router.post("/item/detail",details);

//cart
//get 
router.post("/cart",cart);
router.patch("/cart",cartadd);

router.post("/wishlist",wishlist);


module.exports=router;