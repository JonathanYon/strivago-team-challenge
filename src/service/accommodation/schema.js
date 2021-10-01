import mongoose from "mongoose";
const { Schema, model } = mongoose;

const accommodationSchema = new Schema(
  {
    name: { type: String, required: true },
    host: { type: String, ref: "" },
    maxGuests: { type: Number, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Accommodation", accommodationSchema);
