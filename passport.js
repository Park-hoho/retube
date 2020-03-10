import passport from "passport";
import User from "./models/User";
// strategy는 로그인 하는 방식
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
