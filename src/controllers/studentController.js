const Student = require("../models/student")
const repo = require("../repositories/student");

exports.create = (req, res)=>{
    const user = req.body;
    console.log(user);
    const student = new Student(user.name, user.email, user.phone, user.latitude, user.longitude);
    repo.createStudent(student, ()=>{
        res.end("Student is created");
    });
}

exports.search = (req, res)=>{
    const input = req.body;
    console.log(input);
    repo.search(input, (content)=>{
        console.log(content);
        res.end(content);
    });
}
