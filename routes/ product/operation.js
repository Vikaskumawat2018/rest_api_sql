const pool = require("../../database");
const { update } = require("./product");


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
    },

    update1: (data, callBack) => {
        var name_id, address_id, contact_id;
        var id=data.id;
        pool.query("update product set ? where id="+id, data, (error, results, fields) => {
            if (error) {return callBack(error);}
            return callBack(null, results);
        });       
    }


};






