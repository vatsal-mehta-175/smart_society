var db=require('../dbconnection');
var notice={
    getNoticeByNoticeId:function(Notice_id,callback)
    {
        return db.query("select * from notice_circular where n_id=?",[Notice_id],callback);
    },
    getAllNotice:function(callback)
    {
        return db.query("select * from notice_circular",callback);
    },
    addNotice:function(item,callback)
    {
       // var date=new Date(item.date);
        return db.query("insert into notice_circular (n_title,n_description,n_date,a_id)  values(?,?,?,?)",[item.title,item.description,item.date,item.admin_id],callback);
    },
    updateNoticeByNoticeId:function(Notice_id,item,callback){
       // var date=new Date(item.date);
        return db.query("update notice_circular set n_title=?,n_description=?,n_date=?,a_id=? where n_id=?",[item.title,item.description,item.date,item.admin_id,Notice_id],callback);
    },

    deleteNotice:function(Notice_id,callback)
    {
        return db.query("delete from notice_circular where n_id=?",[Notice_id],callback);
    },
    /*deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Notice_id;
        }
         db.query("delete from notice_cicular where Notice_id in (?)",[delarr],callback);
    },*/


};
module.exports=notice;
