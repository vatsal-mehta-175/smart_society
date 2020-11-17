var db=require('../dbconnection');

var login={
    adminLogin(item,callback)
    {
        return db.query("select * from admin where a_id=? and a_password=?",[item.id,item.password],callback);
    },
    adminChangePassword(item,callback)
    {
        return db.query("update admin set a_password=? where a_id=?",[item.password,item.id],callback);
    },

    residenceLogin(item,callback)
    {
        return db.query("select * from resident where r_house=? and r_password=?",[item.id,item.password],callback);
    },
    residenceChangePassword(item,callback)
    {
        return db.query("update resident set r_password=? where r_house=?",[item.password,item.id],callback);
    },

    gateKeeperLogin(item,callback)
    {
        return db.query("select * from gate_keeper where g_email=? and g_password=?",[item.id,item.password],callback);
    },
    gateKeeperChangePassword(item,callback)
    {
        return db.query("update gate_keeper set g_password=? where g_email=?",[item.password,item.id],callback);
    },

    tenantLogin(item,callback)
    {
        return db.query("select * from tenant where t_email=? and t_password=?",[item.id,item.password],callback);
    },
    tenantChangePassword(item,callback)
    {
        return db.query("update tenant set t_password=? where t_email=?",[item.password,item.id],callback);
    }

}

module.exports=login;
