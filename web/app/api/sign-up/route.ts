import { NextResponse } from "next/server";
import connectDB from "@/app/config/databseConnection";
import { UserModel } from "@/app/models/userModel";
import bcrypt from "bcryptjs";
import { NextApiRequest } from "next";

import mongoose from "mongoose";

// connectDB();

export async function POST(request: any) {
  try {
    console.log(await request.json());
    const { name, email, password } = await request.json();

    mongoose.connect(process.env.MONGO_URI ?? "");

    const hashedPassword = await bcrypt.hash(password ?? "", 10);

    console.log(await request.json());
    const user = new mongoose.models.UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return NextResponse.json({ user, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    // return NextResponse.json({ success: false });
    // console.log("Error");
    if (error instanceof Error)
      return NextResponse.json({ error: error.message, status: 400 });
  }
}
