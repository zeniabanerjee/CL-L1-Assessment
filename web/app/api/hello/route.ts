import { NextResponse } from "next/server";
import connectDB from "@/app/config/databseConnection";
import { UserModel } from "@/app/models/userModel";
import mongoose from "mongoose";

export async function GET(request: any) {
  try {
    connectDB();
    const user = new mongoose.models.UserModel({
      name: "Zenia",
      email: "zenia@a.com",
      password: "password",
    });

    await user.save();
    return new NextResponse("Hello2 ");
  } catch (err) {
    console.log(err.message);
  }
}
