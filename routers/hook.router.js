import { Router } from "../deps.js";
import eventHandler from "../controllers/hook.crontroller.js";

export const hookRouter = new Router({
  prefix: "/webhook",
});

hookRouter.post("/", eventHandler);
