import mongoose from 'mongoose';

const userSchemaObj = {
    username: {
        type: String,
        required: true,
        unique: true
    },
    emai: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Must is required"],
        min: [8, "Password must be atleast 8 characters"],
        max: 12
    }
};
const userSchema = new mongoose.Schema(userSchemaObj, { timestamps: true });
export const User = mongoose.model("User", userSchema);
