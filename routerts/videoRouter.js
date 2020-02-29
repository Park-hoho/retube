import express from "express";
import routes from "../routes";
import globalRouter from "./globalRouter";
import {deleteVideo, editVideo, upload, videoDetail, videos} from "../controllers/videoController";

const videoRouter = express.Router();

globalRouter.get(routes.videos, videos);
globalRouter.get(routes.upload, upload);
globalRouter.get(routes.videoDetail, videoDetail);
globalRouter.get(routes.editVideo, editVideo);
globalRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;