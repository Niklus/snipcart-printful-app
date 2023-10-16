import Router from "@koa/router";

export const aboutRouter = new Router({
  prefix: "/about",
});

aboutRouter.get("/", async (ctx) => {
  ctx.body = ctx.render("about", { title: "About" });
});
