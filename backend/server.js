import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDatabase from "./config/database.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
