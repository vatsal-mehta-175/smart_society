var db=require('../dbconnection');

var amenities={
    am_add(item,callback)
    {
        return db.query("INSERT INTO amenities (am_name,am_description,am_time,am_status) VALUES (?,?,?,?)",[item.am_name,item.am_description,item.am_time,item.am_status],callback);
    },
    am_update(item,callback)
    {
        return db.query("UPDATE amenities set am_name=?, am_description=?, am_time=?, am_status=? where am_id=?",[item.am_name,item.am_description,item.am_time,item.am_status,item.am_id],callback);
    },
    am_delete(item,callback)
    {
        return db.query("update admin set a_password=? where a_id=?",[item.password,item.id],callback);
    },
    am_get(item,callback)
    {
        return db.query("SELECT * FROM amenities ",callback);
    }

    

}

module.exports=amenities;
