import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    toggleCommentLikes,
    toggleTweetLikes,
    toggleVideoLikes,
} from "../controllers/like.controller.js";

const router = Router();
router.use(verifyJWT);

router.route("/video-likes/:videoId").post(toggleVideoLikes);
router.route("/comment-likes/:commentId").post(toggleCommentLikes);
router.route("/tweet-likes/:tweetId").post(toggleTweetLikes);

export { router };
