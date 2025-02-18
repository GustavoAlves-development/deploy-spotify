// API Significa aplication programing interface
// GET, POST, PUT, DELETE
//CRUD
// Endpoint
// Middleware

import express from "express";
import cors from "cors";
import { db } from "./conect.js";

const app = express();
const PORT = 3023;

app.use(cors());
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
