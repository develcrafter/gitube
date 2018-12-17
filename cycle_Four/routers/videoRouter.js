import express from "express";
import routes from "../routes";
import { videos, upload, vidoeDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos); // routes.home is right?
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, vidoeDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

