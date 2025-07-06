import { Router } from "express";
import {
    getVideoDetails,
    updateVideoCredentials,
    uploadAVideo,
    deleteAVideo,
    toggleIsPublished,
    toggleViews,
    getAllVideos
} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/upload-video").post(verifyJWT, upload.fields([
    { name: "videoFile", maxCount: 1 },
    { name: "thumbnail", maxCount: 1 }
]), uploadAVideo)

router.route("/video-details/:videoId").get(getVideoDetails);
router.route("/update-video-credentials/:videoId").patch(upload.single("thumbnail"), updateVideoCredentials)
router.route("/delete-video/:videoId").delete(deleteAVideo)
router.route("/toggle-publish-status/:videoId").patch(toggleIsPublished)
router.route("/add-views/:videoId").get(toggleViews)

router.route("/").get(getAllVideos)
export { router }