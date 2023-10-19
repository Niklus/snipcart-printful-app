import * as pages from "./pages/index.js";

export default (ctx) => {
  return (page, data) => /*html*/ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A description of the website">
        <link 
          rel="icon" 
          type="image/x-icon" 
          href="https://cdn.jsdelivr.net/gh/otizi/assets@main/favicon.ico"
        >
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.min.css"
          nonce="${ctx.state.nonce}"
        />
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/umd/photoswipe-lightbox.umd.min.js"
          nonce="${ctx.state.nonce}">
        </script>
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/umd/photoswipe.umd.min.js"
          nonce="${ctx.state.nonce}">
        </script>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/otizi/assets@main/style.css" 
          nonce="${ctx.nonce}" 
        />
        ${pages[page]({ ...data, nonce: ctx.state.nonce })}
  `;
};
