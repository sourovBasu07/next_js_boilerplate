import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

let cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error("Mongodb uri is missing");

    cached.promise =
        cached.promise ||
        mongoose.connect(MONGODB_URI, {
            dbName: MONGODB_DATABASE_NAME, // Your database name 
            bufferCommands: false,
        });

    cached.conn = await cached.promise;

    return cached.conn;
};