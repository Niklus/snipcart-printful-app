import { Router } from "../deps.js";
import { homePage /*,resetDb*/ } from "../controllers/home.controller.js";
import cache from "../middlewares/cache.js";

export const homeRouter = new Router();

const ttl = 60 * 60 * 24 * 1 * 1000; // 1 day

homeRouter.get("/", cache(ttl), homePage);
// homeRouter.get("/reset", resetDb);
