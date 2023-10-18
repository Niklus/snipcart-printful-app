import { RateLimit } from "../deps.js";

const rateLimit = RateLimit.RateLimit;

export const limiter = rateLimit.middleware({
  interval: { min: 15 }, // 15 minutes = 15*60*1000
  max: 100, // limit each IP to 100 requests per interval
});
