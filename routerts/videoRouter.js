import express from "express";
import routes from "../routes";
import globalRouter from "./globalRouter";

const videoRouter = express.Router();

globalRouter.get(routes.videos, (req, res) => res.send('videos'));
globalRouter.get(routes.upload, (req, res) => res.send('upload'));
globalRouter.get(routes.videoDetail, (req, res) => res.send('videoDetail'));
globalRouter.get(routes.editVideo, (req, res) => res.send('editVideo'));
globalRouter.get(routes.deleteVideo, (req, res) => res.send('deleteVideo'));

export default videoRouter;