import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

/*
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
*/
globalRouter.get(routes.home, (req, res) => res.send("global Home"));
globalRouter.get(routes.search , (req, res) => res.send ());
globalRouter.get(routes.join , (req, res) => res.send ());
globalRouter.get(routes.login , (req, res) => res.send ());
globalRouter.get(routes.logout , (req, res) => res.send ("out"));


export default globalRouter;