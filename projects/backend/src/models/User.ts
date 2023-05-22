import mongoose, { Document, Schema } from "mongoose";

// Definir a interface para o usuário
interface User extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Definir o schema para o usuário
const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users", // Nome da coleção no banco de dados
  }
);

// Criar e exportar o modelo do usuário
export default mongoose.model<User>("User", UserSchema);
