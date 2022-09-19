const pool = require("../../database");


module.exports = {
    add: (data, callBack) => {
        var name_id, address_id, contact_id;
        pool.query("INSERT INTO product set ?", data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    },

    delete1: (data, callBack) => {
        var name_id, address_id, contact_id;
        pool.query("delete from product where id=?", data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    }
};






