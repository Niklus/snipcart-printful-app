import views from "../views/index.js";

export default (ctx, next) => {
  ctx.render = (page, data) => (ctx.body = "<h1>Comming Soon</h1>");
  //ctx.render = views(ctx);
  return next();
};
