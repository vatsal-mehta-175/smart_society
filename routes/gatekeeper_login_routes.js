var gate=require('../models/login_model')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    gate.gateKeeperLogin(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            if(rows.length===0)
            res.json("0");
            else
            res.json("1");
        }
    });
});

router.put('/',function(req,res,next){
    gate.gateKeeperChangePassword(req.body,function(err,rows){
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
