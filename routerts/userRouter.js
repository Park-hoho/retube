import express from "express";
import routes from "../routes";
import globalRouter from "./globalRouter";

const userRouter = express.Router(); //여기에 export있으면 오직 하나의 변수만 export

globalRouter.get(routes.users, (req, res) => res.send('users'));
globalRouter.get(routes.userDetail, (req, res) => res.send('userDetail'));
globalRouter.get(routes.editProfile, (req, res) => res.send('editProfile'));
globalRouter.get(routes.changePassword, (req, res) => res.send('changePassword'));

export default userRouter;  // 파일 전체를 export
