import views from "../views/index.js";

export default (ctx, next) => {
  ctx.render = views(ctx);
  return next();
};
