const express = require("express");

const { body, validationResult } = require('express-validator');

const User = require("../models/user.model");

const router = express.Router();


router.post("/login" , async (req,res)=>{

    try{  
        const user = await User.findOne({email : req.body.email}).lean().exec(); 

        if(user.password !== req.body.password || !user){
            res.send(false);           
        }
        else{
            res.send(true);
        }
        
        
    }
    catch(e){
        return res.send({message : e.message});
    }
})




router.post("" ,

    body("email").notEmpty().withMessage("please enter the valid email id"),
    body("password").notEmpty().withMessage("Please enter the valid password"),
    body("username").notEmpty().withMessage("Please enter the valid username"),
    body("gender").notEmpty().withMessage("please fill the gender details")
        
    ,async (req,res)=>{

    try{

        const errors = validationResult(req);

        if(!errors.isEmpty()){

            console.log(errors);

            return res.status(400).json({errors : errors.array()})

        }

        // we will try to find the user with email provided;

        let user = await User.findOne({email : req.body.email}).lean().exec();

        if(user){
            res.send("User Already Exists")
        }
        else{

            const user = await User.create(req.body);
            res.send(true);
        }
    

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