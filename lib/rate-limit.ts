import dbConnect from "@/lib/db";
import { RateLimit } from "@/models/RateLimit";

export class RateLimitExceededError extends Error {
  constructor(message = "Too many requests. Please try again later.") {
    super(message);
    this.name = "RateLimitExceededError";
  }
}

interface ConsumeRateLimitInput {
  key: string;
  limit: number;
  windowMs: number;
}

export async function consumeRateLimit({
  key,
  limit,
  windowMs,
}: ConsumeRateLimitInput): Promise<void> {
  await dbConnect();

  const now = new Date();
  const windowEnd = new Date(now.getTime() + windowMs);

  const doc = await RateLimit.findOneAndUpdate(
    { key },
    [
      {
        $set: {
          key: { $ifNull: ["$key", key] },
          windowStart: {
            $cond: [{ $gt: ["$expiresAt", now] }, "$windowStart", now],
          },
          expiresAt: {
            $cond: [{ $gt: ["$expiresAt", now] }, "$expiresAt", windowEnd],
          },
          count: {
            $cond: [{ $gt: ["$expiresAt", now] }, { $add: ["$count", 1] }, 1],
          },
        },
      },
    ],
    {
      upsert: true,
      new: true,
      updatePipeline: true,
    },
  ).lean<{ count: number }>();

  if (doc && doc.count > limit) {
    throw new RateLimitExceededError();
  }
}
