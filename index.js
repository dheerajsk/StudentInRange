const express = require("express");
const server = express();
const studentRoutes = require("./src/routes/student");
const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.use("/api/student", studentRoutes);

server.get("/",(req, res)=>{
    res.end("Welcome to Student In Range");
});

server.listen(4100);

console.log("Server is listening on 4100");
