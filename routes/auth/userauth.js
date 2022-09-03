const router =require('express').Router();
const User=require('../../model/userDB')
const Joi =require('@hapi/joi');

//joi validation schema
const val_user = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required()
});



router.post('/register',async(req,res)=>{
    //validate using joi(schema)
    const {error} = val_user.validate(req.body);
    //res.send(error.details);
    //res.send(error.details[0].message);
    if(error) return res.status(400).send(error.details[0].message);
    
    try{
    const new_user=new User(
        {
            username:req.body.username,
            password:req.body.password
        });
    
        
        //console.log('before save');
        let saveUser = await new_user.save();
        res.send(saveUser);
        
    }catch(err)
    {
        res.status(400).send( err );
    }
});

router.get('/',async(req,res)=>{
try{
    const Users = await User.find();
    res.send(Users);
}
catch(err)
{
    res.send(err)
}
});


const schema={
    username:{
        type:String,
        required:true,
        min:2,
        max:200
    },
        password:{
            type:String,
            required:true,
            min:2,
            max:128
        }
}

module.exports=router;