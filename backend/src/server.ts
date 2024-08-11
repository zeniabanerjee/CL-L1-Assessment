import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import authRouter from "./routes/userRoutes";
import logger from "./middleware/loggerMiddleware";
import connectDB from "./config/databaseConnection";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(logger);
app.use(authRouter);

app.get("/", (_, res) =>
  res.json({ message: "Up and Running", success: true })
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message, success: false });

  console.error(err);
});

app.listen(4000, () => {
  console.log("Server Running on http://localhost:4000");
});
