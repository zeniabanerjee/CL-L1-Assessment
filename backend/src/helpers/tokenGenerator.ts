import jwt from "jsonwebtoken";
import config from "../config/config";

export default function tokenGenerator(payload: { id: string }) {
  console.log({ payload });

  return {
    accessToken: jwt.sign(payload, config.JWT_SECRET ?? "", {
      expiresIn: config.JWT_EXPIRE,
    }),
    refreshToken: jwt.sign(payload, config.JWT_SECRET_REFRESH ?? "", {
      expiresIn: config.JWT_EXPIRE_REFRESH,
    }),
  };
}
