import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber :{
        type:Schema.Types.ObjectId, // the subscriber
        ref:"User"
    },
    channel :{
        type:Schema.Types.ObjectId, // subscribe to
        ref:"User"
    }
}, { timestamps: true })



export const Subscription = model("Subscription", subscriptionSchema) 