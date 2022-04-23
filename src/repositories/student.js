
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

exports.search = (input, cb)=>{
    console.log("NAN");
    const latitude = Number(input.latitude);
    const longitude = Number(input.longitude);
    const distance = Number(input.distance);
    const query = "select * from Student where (Latitude > "+(latitude-distance).toString()+" and Latitude <"+(latitude+distance).toString()+") and (Longitude > "+(longitude-distance).toString()+" and Longitude <"+(longitude+distance).toString()+")";
    console.log(query);
    db.query(query, (err, rows)=>{
        console.log(rows);
        if(rows){
            cb(JSON.stringify(rows));
        }else{
            throw new Error(err);
        }
    })
}
