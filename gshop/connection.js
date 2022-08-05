const { createPool } = require("mysql")

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"Pavi",
    database:"gshop",
    connectionLimit:10
})

pool.query(`select * from products`, (err,result,fields)=>{
    if(err){
        console.log("Error");
        console.log(err.message);
    }
    return console.log(result);
})

module.exports = pool;