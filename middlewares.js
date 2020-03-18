import multer from "multer";
import routes from "./routes";
// 전역적으로 사용할 수 있는 변수를 추가하는 방법
// 템플릿, 뷰, 모든 곳에서 사용가능함
const multerVideo = multer({ dest: "uploads/video/" }); // 중요

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "ReTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next(); // 마지막에 next(); 꼭 해주자
};

export const onlyPublic = (req, res, next) => {
  if (req.user){
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
