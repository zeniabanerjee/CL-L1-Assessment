import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const client = new MongoClient(process.env.MONGO_URI as string);
const db = client.db("project-management");

export const findUserByEmail = async (email: string) => {
  return db.collection("users").findOne({ email });
};

export const createUser = async (email: string, hashedPassword: string) => {
  return db.collection("users").insertOne({ email, password: hashedPassword });
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};
