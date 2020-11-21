var amenities=require('../models/amenities_model')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    console.log(req.body);
    amenities.am_add(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {  
            console.log(JSON.stringify(rows));
            res.json(rows);

        }
    });
});

router.get('/',function(req,res,next){
    console.log(req.body);
    amenities.am_get(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {   //console.log(JSON.stringify(rows));
            res.json(rows);
        }
    });
});

router.put('/',function(req,res,next){
    amenities.am_update(req.body,function(err,rows){
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