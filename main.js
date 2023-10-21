import { Koa } from "./deps.js";
import { logger } from "./deps.js";
import { koaBody } from "./deps.js";
import { compress } from "./deps.js";
import { load } from "./deps.js";

await load({ export: true });

import * as router from "./routers/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import security from "./middlewares/security.js";
import views from "./middlewares/views.js";
import db from "./middlewares/db.js";
import { rateLimiter } from "./middlewares/limiter.js";

const app = new Koa();
const PORT = Deno.env.get("PORT") || 3000;

app
  .use(compress())
  .use(rateLimiter)
  .use(db)
  .use(security)
  .use(koaBody())
  .use(logger())
  .use(views)
  .use(router.homeRouter.routes())
  .use(router.homeRouter.allowedMethods())
  .use(router.aboutRouter.routes())
  .use(router.aboutRouter.allowedMethods())
  .use(router.hookRouter.routes())
  .use(router.hookRouter.allowedMethods())
  .use(notFound)
  .on("error", errorHandler)
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
