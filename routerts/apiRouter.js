import express from "express";
import routes from "../routes";
import {
  postRegisterView
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);

export default apiRouter; // 파일 전체를 export
