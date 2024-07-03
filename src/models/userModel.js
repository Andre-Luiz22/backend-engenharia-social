import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String },
    email: { type: mongoose.Schema.Types.String },
    keyPix: { type: mongoose.Schema.Types.String },
    typePix: { type: mongoose.Schema.Types.String },
    address: { type: mongoose.Schema.Types.String },
    school: { type: mongoose.Schema.Types.String },
  },
  {
    versionKey: false,
  }
);

export const user = mongoose.model("users", userSchema);
