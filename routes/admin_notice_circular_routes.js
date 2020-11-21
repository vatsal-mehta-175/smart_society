var n_c=require('../models/notice_circular');
var express = require('express');
var router = express.Router();

router.get('/:notice_id?',function(req,res,next){

  if(req.params.notice_id)
  {
    n_c.getNoticeByNoticeId(req.params.notice_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  else
  {
    n_c.getAllNotice(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }

});

  router.post('/',function(req,res,next){
    n_c.addNotice(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.put('/:notice_id',function(req,res,next){
    n_c.updateNoticeByNoticeId(req.params.notice_id,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:notice_id',function(req,res,next){
    n_c.deleteNotice(req.params.notice_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });
module.exports=router;
