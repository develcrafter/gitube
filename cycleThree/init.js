// import express from "express";
import app from "./app";

const PORT = 7104;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
