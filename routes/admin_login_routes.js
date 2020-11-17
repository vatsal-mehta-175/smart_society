var admin=require('../models/login_model')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    console.log(req.body);
    admin.adminLogin(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {   //console.log(JSON.stringify(rows));
            if(rows.length===0)
            res.json("0");
            else
            res.json("1");
        }
    });
});

router.put('/',function(req,res,next){
    admin.adminChangePassword(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})


module.exports=router;
