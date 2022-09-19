const router = require('express').Router();
const pool = require("../../database");
const dotenv = require('dotenv');
dotenv.config();

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
                        }

                        pool.query("INSERT INTO login_info set ?", passwd, (error, results, fields) => {
                            if (error) throw err;

                            res.send("user created successfully");
                        });

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
    res.status(404);
});



module.exports = router;