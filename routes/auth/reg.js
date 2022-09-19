const pool = require("../../database");


module.exports = {
    reg: (data, callBack) => {
        var name_id, address_id, contact_id;
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
                return callBack(null, results);
            }
        );

        /*
        pool.query(
            `INSERT INTO address_info (ad1, ad2, loc_id)  VALUES (?,?,?)`
            [
            data.ad1,
            data.ad2,
            data.loc_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                //return callBack(null, results);
            }
        );
        pool.query(
            `INSERT INTO contact_info ( code, num, num_verify, mail, mail_verify) VALUES (?,?,?,?,?)`
            [
            data.code,
            data.num,
            data.num_verify,
            data.mail,
            data.mail_verify
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                //return callBack(null, results);
            }
        );
        pool.query(
            `INSERT INTO user (name_id, address_id, con_info_id) VALUES (?,?,?)`
            [
            data.name_id,
            data.address_id,
            data.con_info_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
        */
        
    }
};

h: (data, callBack) => {
    var name_id, address_id, contact_id;
    this.reg(data, callBack);
};





