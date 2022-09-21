const router = require('express').Router();
const pool = require("../../database");
const dotenv = require('dotenv');
const { json } = require('express');
dotenv.config();

{
//const validation=require('../validation');
//const {val_user}=require('../validation');

/*
const Joi =require('@hapi/joi');

//joi validation schema
const val_user = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required()
});
*/
}

global.test;
GLOBAL_VARIABLE="";

async function test1111(table,data) {
    
    try{
        console.log(data);
        var t1=await pool.query("INSERT INTO "+table+" set ?", data, (error, results, fields) => {
        if (error) throw err;
        test=results;
        return results;
    }); 
    //return test;
    }
    catch(err){
        return err;
    }
    console.log(global.GLOBAL_VARIABLE);
    return test;
};

async function tab_ins(table,data) {
    
    try{
        console.log(data);
        t1=await pool.query("INSERT INTO "+table+" set ?", data, (error, results, fields) => {
        if (error) throw err;
        global.test=results.insertId;
        return test;
    }); 
    //return test;
    }
    catch(err){
        return err;
    }
    console.log(global.test);
    return global.test;
};

function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) { return true; }
    
    return false;
};

function isnum(value) {
    if (value.match(/\d/g).length===10) {
        return true;
    } 
    else
    {
        return false;
    }
};

function mailvsnum(in1) {
    if ( isEmail(in1) ) {
        test="mail";
    }
    else if (isnum(in1)) {
        test="num";
    } else {
        test=" ";
    }
    
    return test;
};

function get_cust_id(t) {
    test=mailvsnum("234567890");
    return test;
};

router.post('/register', async (req, res) => {
    name_id1 = "", address_id1 = "", contact_id1 = "";
    const name_data = {
        f_name: req.body.f_name,
        mid_name: req.body.mid_name,
        last_name: req.body.last_name
    };
    const address_data = {
        ad1: req.body.ad1,
        ad2: req.body.ad2,
        loc_id: req.body.loc_id
    };
    const contact_data = {
        code: req.body.code,
        num: req.body.num,
        num_verify: req.body.num_verify,
        mail: req.body.mail,
        mail_verify: req.body.mail_verify
    };

    try {

        var results = await pool.query("INSERT INTO nameinfo set ?", name_data, (error, results, fields) => {
            if (error) throw err;
            name_id1 = JSON.stringify(results.insertId);
            
            pool.query("INSERT INTO address_info set ?", address_data, (error, results, fields) => {
                if (error) throw err;
                address_id1 = JSON.stringify(results.insertId);

                pool.query("INSERT INTO contact_info set ?", contact_data, (error, results, fields) => {
                    if (error) throw err;
                    contact_id1 = JSON.stringify(results.insertId);

                    const user_data = {
                        name_id: name_id1,
                        address_id: address_id1,
                        con_info_id: contact_id1
                    };

                    pool.query("INSERT INTO user set ?", user_data, (error, results, fields) => {
                        if (error) throw err;
                        var user_id = JSON.stringify(results.insertId);
                        
                        const passwd={
                            cust_id     : user_id,
                            password    :req.body.password
                        };

                        var z=tab_ins("login_info",passwd);
                        //y=json.stringify( z.insertId);
                        
                          //  console.log(z);
                            res.send(z+" user created successfully");
                       
                        
                            //res.send("failed").status(500)  ;
                        
                        
                        /*
                        pool.query("INSERT INTO login_info set ?", passwd, (error, results, fields) => {
                            if (error) throw err;

                            res.send(" user created successfully");
                        });
                        
                        */
                        //console.log(res1);
                        
                    });

                });
            });
        });
    } catch (err) {
        res.status(400).send(err);
    }
    //console.log('before save');

});

router.post('/login', async (req, res) => {

    const passwd={
        cust_id     : 1,
        password    :"password"
    };

    var z=test1111("login_info",passwd);
    res.send(z);
});


module.exports = router;
module.exports.GLOBAL_VARIABLE = GLOBAL_VARIABLE;