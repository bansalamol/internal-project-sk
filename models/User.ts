import mongoose, { Schema, Document, Mongoose, mongo } from "mongoose";


// User

export interface User extends Document {
  name?: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  image?: string;
  customerId?: string;
  priceId?: string;
  hasAccess?: boolean;
}

// USER SCHEMA

const UserSchema: Schema<User> = new Schema({
  name: {
    type: String,
    trim: true,
  },
  username: {
    type: String, //S is capitalize in mongoose
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, 'Please use a valid email address'] // regex use for email validation "/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/"
  },
  mobile: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /^[0-9]{10}$/.test(v); // Basic validation for a 10-digit mobile number
      },
      message: (props: { value: string }) => `${props.value} is not a valid mobile number!`,
    },
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
  customerId: {
    type: String,
    validate(value: string) {
      return value.includes("cus_");
    },
  },
  // Used in the Stripe webhook. should match a plan in config.js file.
  priceId: {
    type: String,
    validate(value: string) {
      return value.includes("price_");
    },
  },
  // Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
  hasAccess: {
    type: Boolean,
    default: false,
  },
},
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
const UserModel = (mongoose.models.User as mongoose.Model<User>) ||
  (mongoose.model<User>("User", UserSchema))

export default UserModel;
