const connection=require('../connection/mysql.connection');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
module.exports={
    loginAuth:(req,res)=>{
        let userName=req.body.userName;
        let Password=req.body.Password;
        connection.query(`select * from emp where Email='${userName}'`,(err,result)=>{
            if(err){
                res.send(err.message);
            }else{
                let isSame=bcrypt.compareSync(Password,result[0].password);
                if(isSame){
                    let token=jwt.sign({EmpID: result[0].EmpID,Name: result[0].Name},'secretKey')
                  res.send({error:false,message:'login ok',token:token});
                }else{
                    res.send({error:true,message:'login fail'})
                }
            }
        })
    }
}