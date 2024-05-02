import mongoose from "mongoose";

type connectionObject = {
  isconnected?: number;
};
const connection: connectionObject = {};
const dbconnect = async (): Promise<void> => {
  if (connection.isconnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log(db);
    connection.isconnected = db.connections[0].readyState;
    console.log(db.connections);
    console.log("DB connected successfully");
  } catch (error: any) {
    console.log("failed to connect to database", error);
    console.log("some error occurs");
    process.exit(1);
  }
};
