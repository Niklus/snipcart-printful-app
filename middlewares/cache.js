import { mcache } from "../deps.js";

export default (duration) => {
  return async (ctx, next) => {
    const key = "__koa__" + ctx.url;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      ctx.state.products = cachedBody;
      await next();
      console.log("cache hit");
    } else {
      await next();
      mcache.put(key, ctx.state.products, duration);
      console.log("cache miss");
    }
  };
};
