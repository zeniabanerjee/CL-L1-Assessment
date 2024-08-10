import { RequestHandler } from "express-serve-static-core";
import bcryptjs from "bcryptjs";
import { UserModel } from "../models/userModel";

export default class UserController {
  signUp: RequestHandler = async (req, res, next) => {
    try {
      const hashedPassword = bcryptjs.hash(req.body.password, 10);
      const user = new UserModel({ ...req.body, password: hashedPassword });

      await user.save();
    } catch (error) {
      next(error);
    }
  };

  signIn: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body();

    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404);
      throw new Error("User not found!");
    }

    const passwordMatches = bcryptjs.compare(password, user.password);

    if (!passwordMatches) {
      res.status(400);
      throw new Error("User not found!");
    }

    res.status(200).json({ success: true, user });
  };
}
