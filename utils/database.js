import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect('mongodb://localhost:27017/NextLoginTut');

    isConnected = true;
    console.log("connected to DB");
  } catch (e) {
    console.error('Error occurred:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
