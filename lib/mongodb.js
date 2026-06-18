import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  // We only throw at call-time (inside connectDB), not at import-time,
  // so the app can still build without the env var set.
  console.warn(
    "MONGODB_URI is not set. Add it to .env.local before using the registration form."
  );
}

// Reuse the connection across hot-reloads / serverless invocations.
let cached = global._mongooseConnection;

if (!cached) {
  cached = global._mongooseConnection = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not configured. Add it to your environment variables."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "om_kumar_education",
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
