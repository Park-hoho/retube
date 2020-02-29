import express from "express";//node_modules 에서 Import
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routerts/userRouter";
import videoRouter from "./routerts/videoRouter";
import globalRouter from "./routerts/globalRouter";
import routes from "./routes";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); //보안관련
app.use(morgan("common")); //접속로그

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); //router 불러옴 왜 use인지 검색해보장
app.use(routes.videos, videoRouter);

export default app;