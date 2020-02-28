import express from "express";//node_modules 에서 Import
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router"; //app은 default 줬지만 userRouter는 아니여서 이렇게 함(?)
const app = express();

const handleHome = (req, res) => res.send("Hello");
//(request, response) //response object
const handleProfile = (req, res) => res.send("You are on my profile");
// function handleProfile(req, res) { res.send("You are on my profile") } 위 함수랑 같음
// => 이거는 Javascript의 arrow function
// 아래는 middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); //보안관련
app.use(morgan("common")); //접속로그

app.get("/", handleHome); //("url값", 함수) route

app.get("/profile", handleProfile);

app.use("/user", userRouter); //router 불러옴 왜 use인지 검색해보장

export default app;