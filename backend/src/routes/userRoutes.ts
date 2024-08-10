import express from "express";
import UserController from "../controller/userController";

const userController = new UserController();

const router = express.Router();

router.post("/auth/sign-up", userController.signUp);
router.post("/auth/sign-in", userController.signIn);

export default router;
