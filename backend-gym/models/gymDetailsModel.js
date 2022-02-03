import mongoose from "mongoose";

const gymSchema = mongoose.Schema(
  {
    gym_comany_name: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      default: 0,
    },
    email: {
      type: String,
    },
    date_of_joining: {
      type: Date,
    },
    profile_pic_url: { type: String },
  },
  {
    timestamps: true,
  }
);

gymSchema.index({ gym_comany_name: "text", name: "text" });

const GymDetails = mongoose.model("GymDetails", gymSchema);

GymDetails  .createIndexes();

export default GymDetails;
