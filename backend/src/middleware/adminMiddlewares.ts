import { RequestHandler } from "express";
import { IUser } from "../models/userModel";
import { StatusCodes } from "http-status-codes";

export const verifyAdmin: RequestHandler = (req, res, next) => {
  try {
    console.log(req.body);
    const { user } = req.body as { user: IUser };

    console.log({ newUser: user });

    if (user.userRole !== "admin") {
      res.status(StatusCodes.BAD_REQUEST);
      throw new Error("Unauthorized");
    }

    if (!req.url.includes("request-sign-up") && req.url.includes("sign-up")) {
      return res.status(StatusCodes.OK).send({ success: true });
    }

    next();
  } catch (error) {
    next(error);
  }
};
