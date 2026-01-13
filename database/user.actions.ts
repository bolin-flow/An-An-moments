"use server"; 
//  (Connect -> Query -> Return JSON): defines operations (CRUD) specific to the Users -- "Backend API" logic functions.

import connectDB from "@/lib/mongodb";
import User, { Plan } from "./user.model";
import Subscription from "./subscription.model";

// Async Functions: All database operations must be async (checking internet/DB takes time)
export async function createUser(data: {
  email: string;
  name?: string;
  image?: string;
}) {
  try {
      await connectDB("stripe"); // Connect to stripe_db
    // Mongoose Query: Create a new document
    const user = await User.create(data);
    return { success: true, user: JSON.parse(JSON.stringify(user)) };//Return Clean Data:
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: "Failed to create user" };
  }
}

export async function getUserByEmail(email: string) {
  try {
    await connectDB("stripe"); // Connect to stripe_db
    const user = await User.findOne({ email }).lean();
    return user ? JSON.parse(JSON.stringify(user)) : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function updateUserPlan(userId: string, plan: Plan) {
  try {
    await connectDB("stripe");
    const user = await User.findByIdAndUpdate(
      userId,
      { plan },
      { new: true }
    ).lean();
    return { success: true, user: JSON.parse(JSON.stringify(user)) };
  } catch (error) {
    console.error("Error updating user plan:", error);
    return { success: false, error: "Failed to update plan" };
  }
}

export async function getUserWithSubscription(userId: string) {
  try {
      await connectDB("stripe");
      //lean() returns plain JavaScript objects (faster than Mongoose Documents)
    const user = await User.findById(userId).lean();
    const subscription = await Subscription.findOne({ userId }).lean();
    
    return {
      user: user ? JSON.parse(JSON.stringify(user)) : null,
      subscription: subscription ? JSON.parse(JSON.stringify(subscription)) : null,
    };
  } catch (error) {
    console.error("Error fetching user with subscription:", error);
    return { user: null, subscription: null };
  }
}