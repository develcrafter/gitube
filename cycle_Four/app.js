import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

// setting
app.set("view engine", "pug");

// middleware
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

// router

app.use(routes.home, globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos, videoRouter);


export default app;