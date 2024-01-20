import { Request, Response } from "express";
import userModel from "../model/userModel";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken"

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const token: string = randomBytes(3).toString("hex");
    const user = await userModel.create({ email, token });

    return res.status(201).json({
      msg: "User created",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error",
    });
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);

    if (user) {
      const update = await userModel.findByIdAndUpdate(
        user.id,
        { verify: true },
        { new: true }
      );

      return res.status(200).json({
        msg: "User verified",
        data: update,
      });
    } else {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error",
    });
  }
};

// Add Username
export const addUserName = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.params;

    const user = await userModel.findById(id);

    if (user) {
      const update = await userModel.findByIdAndUpdate(
        user.id,
        { name },
        { new: true }
      );

      return res.status(200).json({
        msg: "User Name added",
        data: update,
      });
    } else {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error",
    });
  }
};

export const signInSchool = async (
    req: any,
    res: Response
  ): Promise<Response> => {
    try {
      const { email, token } = req.body;
  
      const user = await userModel.findOne({ email });
  
      if (user) {
        if (user.token === token) {
          if (user.verify) {
            const verify = jwt.sign({}, "user", {
              expiresIn: "1d",
            });
            (req.session.isAuth = true), (req.session.schoolID = user._id);
  
            return res.status(200).json({
              message:
                "user has been verify please verify, you can veriy now..!! 🚀🚀",
              data: verify,
            });
          } else {
            return res.status(404).json({
              message: "user hasn't been verify please verify",
            });
          }
        } else {
          return res.status(404).json({
            message: "Error reading token / id",
          });
        }
      } else {
        return res.status(404).json({
          message: "Error find user",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: "Error verifying school",
      });
    }
  };

// Add Phone Number
export const addPhoneNumber = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { phoneNumber } = req.params;

    const user = await userModel.findById(id);

    if (user) {
      const update = await userModel.findByIdAndUpdate(
        user.id,
        { phoneNumber },
        { new: true }
      );

      return res.status(200).json({
        msg: "User Phone Number added",
        data: update,
      });
    } else {
      return res.status(404).json({
        msg: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error",
    });
  }
};
