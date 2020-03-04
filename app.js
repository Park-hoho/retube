import express from "express";//node_modules 에서 Import
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {localsMiddleware} from "./middlewares"; //폴더 알파벳 순으로 나열하는건 좋은습관
import routes from "./routes";
import userRouter from "./routerts/userRouter";
import videoRouter from "./routerts/videoRouter";
import globalRouter from "./routerts/globalRouter";

const app = express();

app.use(helmet()); //보안관련
app.set('view engine', "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser()); //cookie를 전달받아서 사용할 수 있도록 만들어줌 사용자 인증 같은 곳에서 쿠키검사할 떄 사용함
app.use(bodyParser.json()); //사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어 (body로 정보)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //접속로그
app.use(localsMiddleware);

app.use(routes.home, globalRouter); //app.use("/", (req, res) => res.render("home");)
app.use(routes.users, userRouter); //아 여기 routes.users가 /users 이여서 userRouter부르려면 /users/~~이렇게
app.use(routes.videos, videoRouter);

export default app;