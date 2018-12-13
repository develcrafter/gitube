import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./routers";

const app = express();

// middleWare, Global Usage example: check IP, ...

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// Router?

const handleHomepage = (req, res) => {
  console.log("/root");
  res.send("<h1>Here is Homepage</h1>");
};

app.get("/", handleHomepage);

const handleProfile = (req, res) => {
  
  console.log("/profile");
  res.send("Here is Profile page, maybe?");
};

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
