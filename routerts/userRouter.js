import express from "express";
import routes from "../routes";
import {
  changePassword,
  editProfile,
  userDetail
} from "../controllers/userController";

const userRouter = express.Router(); // 여기에 export있으면 오직 하나의 변수만 export

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter; // 파일 전체를 export
