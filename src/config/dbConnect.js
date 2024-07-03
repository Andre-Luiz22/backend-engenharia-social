import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.DB_CONNECTION_STRING);

export let db = mongoose.connection;
