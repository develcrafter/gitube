const express = require("express");

const PORT = 7104;

const app = express();

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}
app.listen(PORT, handleListening);
