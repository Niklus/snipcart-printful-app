import koa from "koa";
import logger from "koa-logger";
import serve from "koa-static";
import { koaBody } from "koa-body";
import "dotenv/config.js";
import { homeRouter, aboutRouter, hookRouter } from "./router/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import security from "./middlewares/security.js";
import views from "./middlewares/views.js";
// import { rateLimiter } from "./middlewares/limiter.js";

const app = new koa();
const PORT = process.env.PORT || 3000;

app
  // .use(rateLimiter)
  .use(serve("./public"))
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
