import express from "express";
import routes from "../routes";
import {
  changePassword,
  getEditProfile,
  postEditProfile,
  userDetail
} from "../controllers/userController";
import { uploadAvatar, onlyPrivate } from "../middlewares";

const userRouter = express.Router(); // 여기에 export있으면 오직 하나의 변수만 export

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter; // 파일 전체를 export
