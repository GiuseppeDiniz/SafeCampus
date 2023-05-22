import express, { Application } from "express";
import db from "./config/dbConnect";
const app: Application = express();

db.on("error", (error: Error) => {
  console.error("Erro de conexão:", error);
});

db.once("open", () => {
  // Executado quando a conexão com o banco de dados é estabelecida com sucesso
});

// Middlewares
app.use(express.json());

export default app;
