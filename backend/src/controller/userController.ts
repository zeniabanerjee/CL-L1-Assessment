import { RequestHandler } from "express-serve-static-core";
import bcryptjs from "bcryptjs";
import { UserModel } from "../models/userModel";
import { StatusCodes } from "http-status-codes";
import tokenGenerator from "../helpers/tokenGenerator";

export default class UserController {
  signUp: RequestHandler = async (req, res, next) => {
    try {
      const hashedPassword = await bcryptjs.hash(req.body.password, 10);
      const user = new UserModel({ ...req.body, password: hashedPassword });

      await user.save();

      res.status(StatusCodes.CREATED).json({ success: true, user });
    } catch (error) {
      next(error);
    }
  };

  signIn: RequestHandler = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // Exclude password from the query
      const user = await UserModel.findOne({ email });

      if (!user) {
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("User not found!");
      }

      const id = user._id.toString();

      console.log(password, user.password);

      const passwordMatches = await bcryptjs.compare(password, user.password);

      if (!passwordMatches) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("User not found!");
      }

      const tokens = tokenGenerator({ id });

      const userWithSelectedFields = await UserModel.findOne({ email }).select(
        "-password"
      );

      res.status(200).json({
        success: true,
        data: { userWithSelectedFields, tokens },
        message: "Welcome Back!",
      });
    } catch (error) {
      next(error);
    }
  };
}
