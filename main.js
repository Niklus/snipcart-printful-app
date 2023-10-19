import { Koa } from "./deps.js";
import { logger } from "./deps.js";
import { koaBody } from "./deps.js";
import { compress } from "./deps.js";
import { load } from "./deps.js";

import { homeRouter, aboutRouter, hookRouter } from "./router/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import security from "./middlewares/security.js";
import views from "./middlewares/views.js";
// import { rateLimiter } from "./middlewares/limiter.js";

await load({ export: true });

const app = new Koa();
const PORT = Deno.env.get("PORT") || 3000;

app
  .use(compress())
  // .use(rateLimiter)
  .use(security)
  .use(koaBody())
  .use(logger())
  .use(views)
  .use(homeRouter.routes())
  .use(homeRouter.allowedMethods())
  .use(aboutRouter.routes())
  .use(aboutRouter.allowedMethods())
  .use(hookRouter.routes())
  .use(hookRouter.allowedMethods())
  .use(notFound)
  .on("error", errorHandler)
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
