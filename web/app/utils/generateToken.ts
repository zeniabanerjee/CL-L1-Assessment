import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_SECRET_REFRESH = process.env.JWT_SECRET_REFRESH as string;
const JWT_EXPIRE = process.env.JWT_EXPIRE as string;
const JWT_REFRESH_EXPIRE = process.env.JWT_REFRESH_EXPIRE as string;

export const generateToken = (userId: string) => {
  return {
    access_token: jwt.sign({ id: userId }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    }),
    refresh_token: jwt.sign({ id: userId }, JWT_SECRET_REFRESH, {
      expiresIn: JWT_REFRESH_EXPIRE,
    }),
  };
};
