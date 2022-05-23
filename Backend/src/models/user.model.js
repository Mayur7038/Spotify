const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({

    email : {type : String , required : true},
    password : {type : String },
    username : {type : String},
    gender : {type : String },

})

userSchema.pre("save" , function (next){
    if(! this.isModified("password")) return next;

    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;

    return next();
})

userSchema.methods.checkPassword = function (password){
    return bcrypt.compareSync(password , this.password);
}

module.exports = mongoose.model("user" , userSchema);