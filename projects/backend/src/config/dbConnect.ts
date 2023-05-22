import { MONGODB_PASSWORD } from "../env.json";
import mongoose, { Connection, ConnectOptions } from "mongoose";
const mongodbPassword = MONGODB_PASSWORD; //process.env.MONGODB_PASSWORD;
const connectionStr = `mongodb+srv://safecampus-samin:${mongodbPassword}@safecampus.kmd5oob.mongodb.net/safecampus-db`;
const options: ConnectOptions = {};

mongoose
  .connect(connectionStr, options)
  .then(() => {
    // Restante do código que depende da conexão com o banco de dados
    // Por exemplo:
    // app.listen(3000, () => {
    //   console.log("Server is running on port 3000");
    // });
  })
  .catch((error: Error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Encerra o aplicativo em caso de falha na conexão
  });

const db: Connection = mongoose.connection;

export default db;
