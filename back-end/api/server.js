// API Significa aplication programing interface
// GET, POST, PUT, DELETE
//CRUD
// Endpoint
// Middleware

import express from "express";
import cors from "cors";
import { db } from "./conect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3023;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
