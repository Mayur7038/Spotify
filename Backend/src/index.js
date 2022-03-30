const express = require("express");

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

app.use("/user" , userController);




app.listen(5000,async function (){

    try{
        await connect();
        console.log("listening to port 5000");
    }
    catch(e){
        console.log(e.message);
    }
} )