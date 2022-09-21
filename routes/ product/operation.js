const { limit } = require("@hapi/joi/lib/common");
const pool = require("../../database");
const { update } = require("./product");


module.exports = {
    add: (data, callBack) => {
        pool.query("INSERT INTO product set ?", data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    },

    delete1: (data, callBack) => {
        pool.query("delete from product where id=?", data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    },

    update1: (data, callBack) => {
        var id=data.id;
        pool.query("update product set ? where id="+id, data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    },

    get_items: (data, callBack) => {
        var l= data.limit || process.env.product_limit;
        var n= data.next;
        
            pool.query("SELECT * FROM product.product LIMIT "+ l +" OFFSET ?;", n, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });
         
       /*
        var limit_data= `LIMIT ` + l +` OFFSET `+n;
        pool.query("SELECT * FROM product.product ?;", limit_data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });
               
        */
    },

    //sub query all details
    details: (data, callBack) => {
       pool.query("", limit_data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    }


};






