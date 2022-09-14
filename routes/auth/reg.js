
const pool = require("../../database");


module.exports = {
    reg: (data, callBack) => {
        pool.query(
            `insert into reg (id,name,password) values(?,?,?)`,
            [
                data.id,
                data.name,
                data.password

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






