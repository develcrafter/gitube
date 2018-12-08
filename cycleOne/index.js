import express from "express";

const app = express();
const PORT = 7104;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

const handleHome = (req, res) => {
  console.log("/");
  res.send("This is Homepage! from now start!");
};
app.get("/", handleHome);

const handleProfile = (req, res) => {
  console.log("/profile");
  res.send("Here is Profile page, mayBe...");
};
app.get("/profile", handleProfile);
