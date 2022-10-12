const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'empdb'
})
connection.connect((err)=>{
    err?console.log(err.message):console.log('connection ok');
})
module.exports=connection;