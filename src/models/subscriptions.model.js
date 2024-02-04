import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId, //onwe who is subscribing
      ref: "User",
    },
    channel:{
        type:mongoose.Schema.Types.Object, //one to whom subscrbes
        ref:"User"
    }
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
