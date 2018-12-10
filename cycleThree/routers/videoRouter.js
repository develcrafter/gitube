import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

/*
// videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
*/

videoRouter.get(routes.videos, (req, res) => res.send("video Home"));
videoRouter.get(routes.upload , (req,res) => res.send("upload"));
videoRouter.get(routes.videoDetail , (req,res) => res.send("videoDetail"));
videoRouter.get(routes.editVideo , (req,res) => res.send("editVideo"));
videoRouter.get(routes.deleteVideo , (req,res) => res.send("deleteVideo"));


export default videoRouter;