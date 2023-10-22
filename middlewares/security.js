import { nanoid } from "../deps.js";
import { helmet } from "../deps.js";

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
          `'nonce-${ctx.state.nonce}'`,
          "https://cdn.snipcart.com",
          "https://cdnjs.cloudflare.com",
          "https://cdn.jsdelivr.net",
        ],
        styleSrcElem: [
          "'self'",
          `'nonce-${ctx.state.nonce}'`,
          "https://cdn.snipcart.com",
          "https://cdnjs.cloudflare.com",
          "https://fonts.bunny.net/css",
          "https://cdn.jsdelivr.net",
        ],
        imgSrc: [
          "'self'",
          "data:",
          "https://files.cdn.printful.com",
          "https://cdn.jsdelivr.net",
        ],
        connectSrc: [
          "'self'",
          "https://app.snipcart.com",
          "https://cdn.snipcart.com",
          "https://payment.snipcart.com",
        ],
        frameSrc: ["'self'", "https://payment.snipcart.com"],
      },
    },
  })(ctx, next);
};

export default security;
