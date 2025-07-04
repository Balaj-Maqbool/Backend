import mongoose from "mongoose";
const todoSchemaObj = {
    title: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]
};

const todoSchema = new mongoose.Schema(todoSchemaObj, { timestamps: true })
export const todo = mongoose.model("Todo", todoSchema)