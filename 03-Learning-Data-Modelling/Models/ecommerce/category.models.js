import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    descryption:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        unique:true
    }
}, { timestamps: true })

export const Category = mongoose.model("Category", categorySchema)