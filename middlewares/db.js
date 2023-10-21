const kv = await Deno.openKv();

export default (ctx, next) => {
  ctx.kv = kv;
  return next();
};
