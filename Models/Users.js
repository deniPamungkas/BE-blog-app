import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:''
    },
    status:{
        type:String,
        default:'Student'
    }
},{
    timestamps:true
})

export default mongoose.model('Users', userSchema)