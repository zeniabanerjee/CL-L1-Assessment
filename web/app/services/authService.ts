import bcrypt from "bcryptjs";
import {
  findUserByEmail,
  createUser,
  verifyPassword,
} from "../models/userModel";
import { generateToken } from "../utils/generateToken";

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const isMatch = await verifyPassword(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const tokens = generateToken(user._id.toString());
  return { tokens };
};

export const register = async (email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(email, hashedPassword);
};
