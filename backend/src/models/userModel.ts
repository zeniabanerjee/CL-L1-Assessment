import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  userRole: "admin" | "contributor" | "reviewer" | "approver";
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  userRole: {
    type: String,
    enum: ["admin", "contributor", "reviewer", "approver"],
    default: "contributor",
  },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
