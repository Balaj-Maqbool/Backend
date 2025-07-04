import mongoose from "mongoose";
const subTodoSchemaObj = {
    title: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
};
const subTodoSchema = new mongoose.Schema(subTodoSchemaObj, { timestamps: true });
export const SubTodo = mongoose.model("SubTodo", subTodoSchema)
