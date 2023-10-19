import { Router } from "../deps.js";
import { load } from "../deps.js";

await load({ export: true });

export const homeRouter = new Router();

const PRINTFUL_API_TOKEN = Deno.env.get("PRINTFUL_API_TOKEN");

homeRouter.get("/", async (ctx) => {
  try {
    const response = await fetch("https://api.printful.com/store/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PRINTFUL_API_TOKEN}`,
      },
    });

    const { result } = await response.json();

    ctx.body = ctx.render("home", { title: "Home", products: result ?? [] });
  } catch (error) {
    console.log(error);
  }
});

// Since printful allows only 120 requests per minute, we need to cache the response
// use cache middleware: https://github.com/koajs/cash
// Question: Does Caching apply to all users or just one user?
// Question: How long should we cache the response?
