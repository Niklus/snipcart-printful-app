import { RateLimit } from "../deps.js";

const rateLimit = RateLimit.RateLimit;

// Find the best strategy later.
export const rateLimiter = rateLimit.middleware({
  interval: { min: 1 }, // 1 minute
  max: 60, // Limit each IP to 60 requests per minute
});
