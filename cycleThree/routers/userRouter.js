import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

/*
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
*/

userRouter.get(routes.home, users);
userRouter.get(routes.userDetail , userDetail);
userRouter.get(routes.editProfile , editProfile);
userRouter.get(routes.changePassword , changePassword);

export default userRouter;