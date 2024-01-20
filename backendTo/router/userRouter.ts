import { Router } from "express";
import {
  addPhoneNumber,
  addUserName,
  createUser,
  verifyUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/add-user").post(createUser);
router.route("/add-user-number").post(addPhoneNumber);
router.route("/add-user-name").post(addUserName);
router.route("/verify-user/:id").patch(verifyUser);

export default router;
