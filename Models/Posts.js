import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        unique:true,
        required:true
    },
    pic:{
        type:String,
        default:''
    },
},{
    timestamps:true
})

export default mongoose.model('Posts', postSchema)