import { nanoid } from "nanoid";
import helmet from "koa-helmet";

const security = (ctx, next) => {
  ctx.state.nonce = nanoid(32);
  return helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        scriptSrc: ["'self'", "'unsafe-eval'", `'nonce-${ctx.state.nonce}'`],
        styleSrc: ["'self'", `'nonce-${ctx.state.nonce}'`],
        scriptSrcElem: [
          "'self'",
          "https://cdn.snipcart.com",
          "https://cdnjs.cloudflare.com",
          `'nonce-${ctx.state.nonce}'`,
        ],
        styleSrcElem: [
          "'self'",
          "https://cdn.snipcart.com",
          "https://cdnjs.cloudflare.com",
          "https://fonts.bunny.net/css",
          `'nonce-${ctx.state.nonce}'`,
        ],
        imgSrc: ["'self'", "https://files.cdn.printful.com"],
        connectSrc: [
          "'self'",
          "https://app.snipcart.com",
          "https://cdn.snipcart.com",
        ],
      },
    },
  })(ctx, next);
};

export default security;
