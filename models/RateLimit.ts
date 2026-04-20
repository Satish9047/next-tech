import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IRateLimit extends Document {
  key: string;
  count: number;
  windowStart: Date;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const RateLimitSchema = new Schema<IRateLimit>(
  {
    key: { type: String, required: true, unique: true, index: true, trim: true },
    count: { type: Number, required: true, default: 0, min: 0 },
    windowStart: { type: Date, required: true, default: Date.now },
    expiresAt: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

// TTL cleanup: delete docs once expiresAt is reached.
RateLimitSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const RateLimit: Model<IRateLimit> =
  (mongoose.models.RateLimit as Model<IRateLimit>) ||
  mongoose.model<IRateLimit>("RateLimit", RateLimitSchema);
