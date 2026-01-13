//Interface + Schema + Model for User collection in MongoDB using Mongoose
import { Schema, model, models, Document as Document } from "mongoose"; 

// Mongoose (import { Document } from "mongoose")
// Enums: Fixed lists of allowed values.
// Good for: Statuses (pending, active), Roles (admin, user), Categories
export enum Plan {
  FREE = "free",
  PREMIUM = "premium",
}

// 3. Interface: Defines the Shape for TypeScript to check your code.
export interface IUser extends  Omit<Document, "_id"> { // Omit default _id to define it as string manually
  _id: string; // Mongoose's Document type enforces _id to be an ObjectId by default instead of string.
  email: string;
  name?: string;
  image?: string;
  plan: Plan;
  customerId?: string; // Stripe customer ID
  createdAt: Date;
  updatedAt: Date;
}
// Schema: Defines the Rules for MongoDB database.
const UserSchema = new Schema<IUser>(
  {
    _id: {
      type: String,
      default: () => {
        // Generate cuid-like ID (you can use `cuid` package for exact match)
        return `c${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    plan: {
      type: String,
      enum: Object.values(Plan),
      default: Plan.FREE,
    },
    customerId: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values
      required: false,
    },
  },
  {
    timestamps: true, // Auto-creates createdAt and updatedAt
    _id: false, // Disable auto ObjectId generation
  }
);
//  Model Export: Singleton pattern existing models.User (if hot reload happened) OR new model "User"
const User = models?.User || model<IUser>("User", UserSchema);

export default User;