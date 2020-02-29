import routes from "./routes";
//전역적으로 사용할 수 있는 변수를 추가하는 방법
//템플릿, 뷰, 모든 곳에서 사용가능함
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "ReTube";
    res.locals.routes = routes;
    next(); //마지막에 next(); 꼭 해주자
};