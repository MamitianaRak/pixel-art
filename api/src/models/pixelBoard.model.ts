import { Schema, model } from "mongoose";

const pixelBoardSchema = new Schema(
  {
    title: { type: String, required: false },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    allowOverwrite: { type: Boolean, required: true, default: false },
    cooldownInSeconds: { type: Number, required: true, default: 60 },
  },
  { timestamps: true },
);

export const PixelBoardModel = model("PixelBoard", pixelBoardSchema);
