import * as pages from "./pages/index.js";

export default (ctx, next) => {
  ctx.render = (page, data) => /*html*/ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A description of the website">
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.min.css"
        />
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/umd/photoswipe-lightbox.umd.min.js">
        </script>
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/umd/photoswipe.umd.min.js">
        </script>
        <link rel="stylesheet" href="style.css" />
        ${pages[page](data)}
  `;
  return next();
};
