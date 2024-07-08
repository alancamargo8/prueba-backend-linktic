import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(
  cors({
    origin: "http://localhost:5173", // o la dirección de tu frontend
  })
);

//conexion a MongoDB
mongoose
  .connect(process.env.MONGO_URL as string, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB", err));

app.use("/products", productRoutes);
app.use("/order", orderRoutes);

// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("API de Ecommerce funcionando");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
