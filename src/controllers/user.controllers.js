const {pool, resume} = require('../db');

const CreateUser = (datosForm) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO usuarios(name_user, mail, pass) VALUES (?, ?, ?)";
        if(datosForm.pass1 === datosForm.pass2){
            pool.query(sql, [datosForm.user, datosForm.mail, datosForm.pass1], (err, result) => {
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });

        }else{
            reject();
        }
    })
}

const LoginUser = (datosForm) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM usuarios WHERE mail = ? AND BINARY pass = ?";
        pool.query(sql, [datosForm.mail, datosForm.pass], (err, result) => {
            if(err){
                reject(err);
            }else{
                if(result.length == 0){
                    reject();
                }else{
                    resolve(result);
                }
                
            }
        })
    })
}

module.exports = { CreateUser, LoginUser }