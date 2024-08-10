import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  userRole: "admin" | "contributor" | "reviewer" | "approver";
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false, // Do not return password in queries
  },
  userRole: {
    type: String,
    enum: ["admin", "contributor", "reviewer", "approver"],
    default: "contributor",
  },
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
