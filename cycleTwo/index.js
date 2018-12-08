import express from "express";

const app = express();
const PORT = 8817;

function handleListeing() {
  console.log(`Listeining on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListeing);

// middleWare, Global Usage example: check IP, ...

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);

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
