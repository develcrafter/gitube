import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => res.send("Videos")); // routes.home is right?
videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("VD"));
videoRouter.get(routes.editVideo, (req, res) => res.send("eV"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("dV"));

export default videoRouter;

