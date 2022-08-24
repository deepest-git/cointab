UserModel = require('../models/UserModel')

const getAllUsers = (callback) =>{
    UserModel.GetAllUsers()
   .then(res => {callback(res.rows)})
}

const deleteUser = (id,callback) =>{
    UserModel.DeleteUser(id)
   .then(res => {callback(res)})
}

const addUser = (data,cb) =>{
    UserModel.AddUser(data)
   .then(res => cb(res))
}

const edit = (data,cb) =>{
    UserModel.edit(data)
   .then(res => cb({'success':true}))
}


const login = async(data,callback) =>{
   UserModel.getUser(data)
   .then(user =>{

    if (user.rows.length == 0) {
        callback({'success':false});

        if(data.attempt-1 == 0)
            UserModel.lockU(data.email,true);
    }

    else{
        if(user.rows[0].lockuntil){

            UserModel.isLock(user.rows[0].lockuntil)
            .then(l => {

                if(l == false){
                    callback({'success':true});
                    UserModel.lockU(data.email,false);
                }
                else callback({'success':false , lock:user.rows[0].lockuntil});
            })

        }

        if(! user.rows[0].lockuntil)
        callback({'success':true});
    }

   });
}


module.exports = {getAllUsers,deleteUser,addUser,edit,login};