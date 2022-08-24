// const { raw } = require("express");

// db = require("../init");
// pg_client = db.init_db();

// const GetAllUsers=async()=>{
//     return await pg_client.query('SELECT * FROM c_user;')
// }

// const DeleteUser=async(id)=>{
//     await pg_client.query('DELETE FROM c_user where id ='+id+';');
//     return {'success':true}
// }

// const AddUser=async(data)=>{

//     let valid  = await pg_client.query('select * from c_user where email ='+"\'"+data.email+"\'");

//     if(valid.rows.length > 0){
//         return {'success':false}
//     }

//     let raw = "INSERT INTO c_user(name,password,email) VALUES ("+
//     "'"+data.name+"'"+','+"'"+data.pass+"'"+','+"'"+data.email+"');";
//     await pg_client.query(raw);

//     return {'success':true}
// }

// const edit=async(data)=>{
//     let raw = " UPDATE c_user SET name =\'"+data.name+"\' , password =\'"+data.pass+"\' WHERE id ="+data.id+";";
//     return await pg_client.query(raw);
// }

// const getUser=async(data)=>{
//     let raw = "select * from c_user where email = \'"+data.email+"\' and password = \'"+data.pswd+"\';";
//     return await pg_client.query(raw);
// }

// const lockU=async(data,doLock)=>{

//     let raw = "UPDATE c_user SET lockuntil = ";
//     doLock ? raw += 'NOW()::timestamp+interval \'24 hours\'' : raw += 'NULL';
//     raw+=';';
//     return await pg_client.query(raw);
// }

// const isLock=async(lockTime)=>{

//     let raw = "select now()::timestamp < $1 as val;";
//     let val =[lockTime];
//     l = await pg_client.query(raw,val);
//     return l.rows[0].val
// }


// module.exports = {GetAllUsers,DeleteUser,AddUser,edit,getUser,lockU,isLock};