import express from "express";
import UserController from "../controller/userController";
import tokenVerification from "../middleware/tokenVerification";
import { verifyAdmin } from "../middleware/adminMiddlewares";

const userController = new UserController();

const router = express.Router();

router.post(
  "/auth/sign-up",
  [tokenVerification, verifyAdmin],
  userController.signUp
);
router.get(
  "/auth/request-sign-up",
  [tokenVerification, verifyAdmin],
  userController.requestSignUpViaAdmin
);
router.post(
  "/auth/sign-up-user",
  [tokenVerification, verifyAdmin],
  userController.signUpViaAuth
);
router.post("/auth/sign-in", userController.signIn);
router.get("/auth/profile", tokenVerification);

export default router;
