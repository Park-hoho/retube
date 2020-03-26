import express from "express";
import routes from "../routes";
import {
  getChangePassword,
  postChangePassword,
  getEditProfile,
  postEditProfile,
  userDetail
} from "../controllers/userController";
import { uploadAvatar, onlyPrivate } from "../middlewares";

const userRouter = express.Router(); // 여기에 export있으면 오직 하나의 변수만 export

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile); // post를 get으로 해놓고 시간 존나 낭비했어 난 멍청이야...ㅠㅠㅠㅠㅠㅠ

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter; // 파일 전체를 export
