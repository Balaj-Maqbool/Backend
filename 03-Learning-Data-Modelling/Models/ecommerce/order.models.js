import mongoose from "mongoose"

const orderItemsSchems = new mongoose.Schema({
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
        default: 0
    },
    itemPrice: {
        type: Number,
        default: 0

    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ["delivered", "cancelled", "delayed"]
    },
    paymentMethod: {
        type: String,
        enum: ["Cash on Delivery", "Jazzcash", "EasyPaisa"],
        default: "Cash on Delivery"
    },
    shippingAdress: {
        fullName: String,
        country: String,
        street: String,
        house: String,
        city: String,
        phone: String,

    },
    orderItems: [orderItemsSchems],
    totalPrice: {
        type: Number,
        default: 0
    },
    willDeliver:{
        type:Date,
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)