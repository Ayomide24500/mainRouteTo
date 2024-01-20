import express, { Application } from "express";
import { dbConfig } from "./utils/dbConfig";
import cors from "cors";
import { mainApp } from "./mainApp";

const app: Application = express();

const port: number = parseInt(process.env.PORT!);
app.use(express.json());
app.use(cors());

mainApp(app);

const server = app.listen(2130, () => {
  console.log("server is up and running");
  dbConfig();
});

process.on("uncaughtException", (error: any) => {
  console.log("uncaughtException", error);

  process.exit(1);
});
process.on("uncaughtException", (reason: any) => {
  console.log("uncaughtException", reason);

  server.close(() => {
    process.exit(1);
  });
});
