import { Document, Schema, model } from "mongoose";
interface iUser {
  email: string;
  name: string;
  token: string;
  phoneNumber: number;
  verify: boolean;
  started: boolean;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    token: {
      type: String,
    },
    name: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    started: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("onlineUser", userModel);
