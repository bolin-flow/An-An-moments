import { Schema, model, models, Document } from "mongoose";
import { Plan } from "./user.model";
// Move SubscriptionPeriod enum HERE (it belongs to Subscription, not User)
export enum SubscriptionPeriod {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

export interface ISubscription extends Omit<Document, "_id"> {
  _id: string; //Fix Interface: Use Omit<Document, "_id">
  userId: string; // Changed from Types.ObjectId to string
  plan: Plan;
  period: SubscriptionPeriod;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    _id: {
      type: String,
      default: () => {
        // Generate cuid-like ID
        return `c${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
      },
    },
    userId: {
      type: String, // Changed to String to match Prisma
      ref: "User",
      required: true,
      unique: true,
    },
    plan: {
      type: String,
      enum: Object.values(Plan),
      required: true,
    },
    period: {
      type: String,
      enum: Object.values(SubscriptionPeriod),
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    _id: false, // Disable auto ObjectId generation
  }
);

const Subscription =
  models?.Subscription ||
  model<ISubscription>("Subscription", SubscriptionSchema);

export default Subscription;