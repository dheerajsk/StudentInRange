
const db = require("../config/mysql");

exports.createStudent = (student, cb)=>{
    const query = "insert into Student(name, email, phone, latitude, longitude) values('"+student.name+"','"+student.email+"','"+student.phone+"','"+student.latitude+"','"+student.longitude+"')";
    console.log(query);
    db.query(query, (err)=>{
        if(!err){
            cb();
        }else{
            throw new Error(err);
        }
    })
}
