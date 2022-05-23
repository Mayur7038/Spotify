const express = require("express");

const User = require("../models/user.model");

const router = express.Router();


router.post("/login" , async (req,res)=>{


    try{  


        const user = await User.findOne({email : req.body.email});
       

        if(! user ) return res.status(401).send({message : "please enter valid email id"});

        const match = user.checkPassword(req.body.password);

        if(!match) return res.status(401).send({message : "Please verify the email id or password"});

        return res.status(201).send(user);
        
        
    }
    catch(e){
        return res.send({message : e.message});
    }
})


router.post("" ,async (req,res)=>{

    try{

        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(user) return res.send("false");

        user = await User.create(req.body);


        return res.status(201).send(user);

    }
    catch(e){
        
        return res.status(500).send({message : e.message});
    }

} )

router.get("" , async(req,res)=>{

    try{

        const user = await User.find().lean().exec();

        return res.status(201).send(user);


    }
    catch(e){
        return res.status(500).send({message : e.message});
    }

})


module.exports = router;