"use server";

import connectDB from "@/lib/mongodb";
import Subscription, { SubscriptionPeriod } from "./subscription.model";
import { Plan } from "./user.model";

export async function createSubscription(data: {
  userId: string;
  plan: Plan;
  period: SubscriptionPeriod;
  endDate: Date;
}) {
  try {
    await connectDB("stripe"); // Connect to stripe_db
    const subscription = await Subscription.create(data);
    return {
      success: true,
      subscription: JSON.parse(JSON.stringify(subscription)),
    };
  } catch (error) {
    console.error("Error creating subscription:", error);
    return { success: false, error: "Failed to create subscription" };
  }
}

export async function getActiveSubscription(userId: string) {
  try {
    await connectDB("stripe");
    const subscription = await Subscription.findOne({
      userId,
      endDate: { $gte: new Date() }, // Active subscription
    }).lean();

    return subscription ? JSON.parse(JSON.stringify(subscription)) : null;
  } catch (error) {
    console.error("Error fetching subscription:", error);
    return null;
  }
}

export async function cancelSubscription(userId: string) {
  try {
    await connectDB("stripe");
    const subscription = await Subscription.findOneAndDelete({ userId });
    return {
      success: true,
      subscription: JSON.parse(JSON.stringify(subscription)),
    };
  } catch (error) {
    console.error("Error canceling subscription:", error);
    return { success: false, error: "Failed to cancel subscription" };
  }
}
