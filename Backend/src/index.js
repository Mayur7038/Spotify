const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
app.use(cors());

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");

app.use("/user" , userController);

app.listen(port ,async function (){

    try{
        await connect();
        console.log("listening to port 5000");
    }
    catch(e){
        console.log(e.message);
    }
} )