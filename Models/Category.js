import mongoose from "mongoose";
import { Schema } from "mongoose";

const CatSchema = new Schema({
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model('Categories', CatSchema)