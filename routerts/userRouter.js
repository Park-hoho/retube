import express from "express";
import routes from "../routes";
import globalRouter from "./globalRouter";
import {changePassword, editProfile, userDetail, users} from "../controllers/userController";

const userRouter = express.Router(); //여기에 export있으면 오직 하나의 변수만 export

globalRouter.get(routes.users, users);
globalRouter.get(routes.userDetail, userDetail);
globalRouter.get(routes.editProfile, editProfile);
globalRouter.get(routes.changePassword, changePassword);

export default userRouter;  // 파일 전체를 export
