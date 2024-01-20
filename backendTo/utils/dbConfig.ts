import mongoose, { connect } from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/userTo";

export const dbConfig = async () => {
  try {
    await connect(URL).then(() => {
      console.log("database is connected successfully..🚀🚀");
    });
  } catch (error) {
    return error;
  }
};
