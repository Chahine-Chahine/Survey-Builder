const mongoose = require ("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20,
        trim: true,        
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        } ,
    email:{
        type: String,
        required: true,
        unique: true,
    },
    first_name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    last_name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        },
    profile_pic:{
        type: String,
    },
    role:{
      type: String,
    }
});
userSchema.pre(
    "save",
    async function (next) {
      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
        console.log(error);
        next(error);
      }
    },
    {
      timestamps: true,
    }
  );
const User = mongoose.model("User", userSchema);

module.exports = User;