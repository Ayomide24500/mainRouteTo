import { Application, Request, Response } from "express";
import router from "./router/userRouter";
export const mainApp = (app: Application) => {
  try {
    app.use("/", router);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          msg: "welcome to api",
        });
      } catch (error) {
        res.status(200).json({
          msg: "error viewing api",
        });
      }
    });
  } catch (error) {
    return error;
  }
};
