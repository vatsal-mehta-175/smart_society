var residence=require('../models/login_model')
var express=require('express');
const { compile } = require('jade');
var router=express.Router();

router.post('/',function(req,res,next){
    residence.residenceLogin(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            //console.log(JSON.stringify(rows[0].approve_flag));
            if(rows.length===0)
            res.json("0");
            else{
            if(JSON.stringify(rows[0].approve_flag)==="1")
                res.json("1");
            else
                res.json("2");
            }
        }
    });
});

router.put('/',function(req,res,next){
    residence.residenceChangePassword(req.body,function(err,rows){
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
