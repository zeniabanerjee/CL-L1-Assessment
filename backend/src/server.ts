import express from "express";
import authRouter from "./routes/userRoutes";
import { error } from "console";

console.log("Up and Running!");

const app = express();

app.use(authRouter);

app.get("/", (_, res) =>
  res.json({ message: "Up and Running", success: true })
);

app.use(error);

app.listen(4000, () => {
  console.log("Server Running on http://localhost:4000");
});
