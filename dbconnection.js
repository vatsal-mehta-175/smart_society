var mysql=require('mysql');
	var connection=mysql.createPool({
 	port:'3307',
	host:'localhost',
 	user:'root',
 	password:'',
 	database:'smart_society'
 
	});
	module.exports=connection;