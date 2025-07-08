import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { CORS_ORIGIN } from "./constants.js";

const app = express()

app.use(cors({
    origin: CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

app.use(express.json({ limit: "24kb" }));

app.use(express.urlencoded({
    limit: "24kb",
    extended: true
}))

app.use(express.static("public"))
app.use(cookieParser())

// router import

import { router as userRoutes } from "./routes/user.routes.js"
import { router as videoRoutes } from "./routes/video.routes.js";
import { router as playlistRoutes } from "./routes/playList.routes.js"

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/videos", videoRoutes)
app.use("/api/v1/playlists", playlistRoutes)


// http://localhost:3000/api/v1/users/register
// http://localhost:3000/api//v1/users/login


export { app }