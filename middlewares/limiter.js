import { RateLimit } from "../deps.js";

const rateLimit = RateLimit.RateLimit;

// Find the best strategy later.
export const rateLimiter = rateLimit.middleware({
  interval: { min: 15 }, // 15 minutes = 15*60*1000
  max: 5000, // Limit each IP to 500 requests per interval
});
