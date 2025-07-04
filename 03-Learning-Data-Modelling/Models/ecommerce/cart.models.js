import mongoose from "mongoose";
const itemsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    descryption: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    itemPrice: {
        type: Number,
        default: 0

    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    image: {
        type: String
    }


})
const cartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    totalItems: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    items: [itemsSchema]

}, { timestamps: true })

export const Cart = mongoose.model("Cart", cartSchema);
