const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());

const port =  5000;

const userController = require("./controllers/user.controller");

app.use("/user" , userController);

app.listen(port ,async function (){

    try{
        await connect();
        console.log(`listening to port  ${port}`);
    }
    catch(e){
        console.log(e.message);
    }
} )