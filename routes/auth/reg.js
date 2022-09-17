
const pool = require("../../database");


module.exports = {
    reg: (data, callBack) => {
        pool.query(
            `INSERT INTO nameinfo (f_name,mid_name,last_name) VALUES (?,?,?);`,
            [
                data.f_name,
                data.mid_name,
                data.last_name

            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    }
    
};






