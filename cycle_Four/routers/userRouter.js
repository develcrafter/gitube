import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail , (req, res) => res.send("uD"))
userRouter.get(routes.editProfile , (req, res) => res.send("eD"))
userRouter.get(routes.changePassword , (req, res) => res.send("cP"))

export default userRouter;