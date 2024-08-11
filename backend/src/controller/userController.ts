import { RequestHandler } from "express-serve-static-core";
import bcryptjs from "bcryptjs";
import { UserModel } from "../models/userModel";
import { StatusCodes } from "http-status-codes";
import tokenGenerator from "../helpers/tokenGenerator";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import config from "../config/config";

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

  requestSignUpViaAdmin: RequestHandler = async (req, res, next) => {
    try {
      const { email } = req.query as { email: string };

      if (!email) {
        res.status(StatusCodes.BAD_REQUEST);
        throw new Error("Email is required!");
      }

      const emailTemplate = await fs.readFile(
        path.join(process.cwd(), "src", "public", "verifyUser.html"),
        "utf-8"
      );

      const tokens = tokenGenerator({ id: req.body.user.id }, "5m");

      const emailData = {
        link: `http://localhost:3000/auth/sign-up?access_token=${tokens.accessToken}`,
      };
      const htmlToSend = Handlebars.compile(emailTemplate);
      const finalTemplate = htmlToSend(emailData);

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: config.NODEMAILER_EMAIL,
          pass: config.NODEMAILER_PASSWORD,
        },
      });

      // Define the email options
      const mailOptions = {
        from: `"jira clone" ${config.NODEMAILER_EMAIL}`,
        to: email,
        subject: "Email Verification",
        html: finalTemplate,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return next(error);
        }

        console.log("Email sent: " + info.response);
        res
          .status(StatusCodes.OK)
          .json({ message: "Verification email sent successfully!" });
      });
    } catch (error) {
      next(error);
    }
  };

  signUpViaAuth: RequestHandler = async (req, res, next) => {
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
        data: { user: { userWithSelectedFields, tokens } },
        message: "Welcome Back!",
      });
    } catch (error) {
      next(error);
    }
  };
}
