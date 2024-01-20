import axios from "axios";

const URL: string = "http://localhost:2130";
export const createUser = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/add-user`, { email: data })
      .then((res: any) => {
        console.log(res);

        return res?.data;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const verifyUser = async (data: string, ID) => {
  try {
    await axios
      .patch(`${URL}/verify-user/${ID}`, { token: data })
      .then((res: any) => {
        console.log(res);

        return res?.data;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};
