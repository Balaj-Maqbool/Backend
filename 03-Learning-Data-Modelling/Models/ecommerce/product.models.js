import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descryption: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    isInStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sold: {
        type: Boolean,
        default: false
    },
    image:{
        type:String
    }
}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)