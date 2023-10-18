import koa from "koa";
import logger from "koa-logger";
import serve from "koa-static";
import { koaBody } from "koa-body";
import "dotenv/config.js";
import { homeRouter, aboutRouter } from "./router/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import security from "./middlewares/security.js";
import views from "./middlewares/views.js";

const app = new koa();

app
  .use(serve("./public"))
  .use(security)
  .use(koaBody())
  .use(logger())
  .use(views)
  .use(homeRouter.routes())
  .use(homeRouter.allowedMethods())
  .use(aboutRouter.routes())
  .use(aboutRouter.allowedMethods())
  .use(notFound)
  .on("error", errorHandler)
  .listen(3000, () => {
    console.log("Listening on port 3000");
  });
