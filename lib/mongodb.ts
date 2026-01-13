import mongoose from "mongoose";

// Define the connection cache type
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Extend the global object to include our mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
  // eslint-disable-next-line no-var
  var mongooseStripe: MongooseCache | undefined;
}
/**
 * Establishes a connection to MongoDB using Mongoose.
 * Caches the connection to prevent multiple connections during development hot reloads.
 * @param dbType - Type of database to connect to: "main" (moments_db) or "stripe" (stripe_db)
 * @returns Promise resolving to the Mongoose instance
 */

async function connectDB(
  dbType: "main" | "stripe" = "main"
): Promise<typeof mongoose> {
  // Get the appropriate URI and cache based on dbType
  const MONGODB_URI =
    dbType === "stripe"
      ? process.env.MONGODB_STRIPE_URI
      : process.env.MONGODB_URI;
  const cacheKey = dbType === "stripe" ? "mongooseStripe" : "mongoose";
  
  // Initialize the cache on the global object for this database type
  let cached: MongooseCache = global[cacheKey] || { conn: null, promise: null };
  
  if (!global[cacheKey]) {
    global[cacheKey] = cached;
  }

  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Return existing connection promise if one is in progress
  if (!cached.promise) {
    // Validate MongoDB URI exists
    if (!MONGODB_URI) {
      throw new Error(
        `Please define the MONGODB_${dbType === "stripe" ? "STRIPE_" : ""}URI environment variable inside .env`
      );
    }

    const options = {
      bufferCommands: false, // Disable Mongoose buffering
    };

    // Create a new connection promise
    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    // Wait for the connection to establish
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset promise on error to allow retry
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;
