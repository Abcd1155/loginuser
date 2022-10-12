const connection=require('../connection/mysql.connection');
const bcrypt=require('bcrypt');
module.exports={
    getAll:(req,res)=>{

        let id=req.user.EmpID;
        connection.query(`SELECT EmpID, Name, Email, Mobile, Age, password FROM emp where EmpID='${id}'`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message});
            }else{
                res.send({error:false,data:result})
            }
        })

    },createUser:(req,res)=>{
        let salt=bcrypt.genSaltSync(10);
        let hashPassword=bcrypt.hashSync(req.body.password,salt);
        connection.query(`INSERT INTO emp(EmpID, Name, Email, Mobile, Age, password) VALUES (0,'${req.body.Name}','${req.body.Email}','${req.body.Mobile}','${req.body.Age}','${hashPassword}')`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message});
            }else{
                if(result.affectedRows>0){
                    res.send({error:false,message:'New user created'});
                }
              
            }
        })
    }

}