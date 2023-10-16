import koa from "koa";
import logger from "koa-logger";
import serve from "koa-static";
import views from "./views/index.js";
import "dotenv/config.js";
import { homeRouter, aboutRouter } from "./router/index.js";

const app = new koa();

app
  .use(logger())
  .use(serve("./public"))
  .use(views)
  .use(homeRouter.routes())
  .use(homeRouter.allowedMethods())
  .use(aboutRouter.routes())
  .use(aboutRouter.allowedMethods())
  .use((ctx) => {
    ctx.body = ctx.render("notFound", { title: "Not Found" });
  })
  .listen(3000, () => {
    console.log("Listening on port 3000");
  });
