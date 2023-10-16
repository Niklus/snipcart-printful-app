import Router from "@koa/router";
import { PrintfulClient, request } from "printful-request";

const printful = new PrintfulClient(process.env.PRINTFUL_API_TOKEN);

export const homeRouter = new Router();

homeRouter.get("/", async (ctx) => {
  try {
    const { result } = await printful.get("store/products");
    ctx.body = ctx.render("home", { title: "Home", products: result });
  } catch (error) {
    console.log(error);
  }
});

// Since printful allows only 120 requests per minute, we need to cache the response
// use cache middleware: https://github.com/koajs/cash
// Question: Does Caching apply to all users or just one user?
// Question: How long should we cache the response?
