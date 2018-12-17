import app from "./app";

const PORT = 3881;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);