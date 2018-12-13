import app from "./app";

const PORT = 8817;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
