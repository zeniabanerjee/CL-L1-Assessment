import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";

const tokenVerification: RequestHandler = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization?.split(" ") as string[];

    if (!token) {
      throw new Error("Token not found!");
    }

    const decoded = <{ id: string }>(
      jwt.verify(token, process.env.JWT_SECRET as string)
    );

    if (!decoded) {
      throw new Error("Invalid Token!");
    }

    const user = await UserModel.findById(decoded.id);

    if (!user) {
      throw new Error("User not found!");
    }

    req.body.user = user;

    if (req.url === "/auth/profile") {
      return res.json({ data: user, success: true });
    }

    return next();
  } catch (error) {
    next(error);
  }
};

export default tokenVerification;
