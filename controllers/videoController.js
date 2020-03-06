import routes from "../routes";
import Video from "../models/Video"; //element를 받는 통로

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] })
    }
};
//render 함수의 첫번째 인자는 탬플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
export const search = (req, res) => {
    const {
        query: {term: searchingBy}
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy: searchingBy, videos });
};

export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "Upload"})
};

export const postUpload = async(req, res) => {
    const {
        body: { title, description },
        file: { path }
    }= req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id))
};

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id); //findById 가 뭔지 알아내기
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => { // Video를 업데이트
    const {
        params: {id},
        body: {title,  description}
    } = req;
    try {
        await Video.findOneAndUpdate({_id: id}, {title,  description}); // id를 찾고, 제목과 설명을 업데이트한다.
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home)
    }
};

export const deleteVideo = async(req, res) => {
    const {
        params: {id}
    } =req;
    try {
        await Video.findOneAndRemove({_id: id});
    } catch (error) {}
    res.redirect(routes.home);
};
