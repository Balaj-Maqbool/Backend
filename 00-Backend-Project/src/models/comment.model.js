import { Schema, model } from "mongoose";

const commentSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video",
        },
    },
    { timestamps: true }
);

export const Comment = model("Comment", commentSchema);
