import routes from "./routes";

export const localsMiddleware = (req, res, next) => { //마지막에 next(); 꼭 해주자
    res.locals.siteName = "ReTube";
    res.locals.routes = routes;
    next();
};