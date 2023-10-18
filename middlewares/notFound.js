export default (ctx) => {
  ctx.status === 404;
  ctx.body = ctx.render("notFound", { title: "Not Found" });
};
