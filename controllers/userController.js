import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// Join

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
}; // render 첫번째 인자는 pug 이름
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    // To Do: Log user in
  }
};

// Login

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Log In" });
};
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
