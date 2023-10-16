import * as pages from "./pages/index.js";

export default (ctx, next) => {
  ctx.render = (page, data) => /*html*/ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A description of the website">
        <title>My Website</title>
        <link rel="stylesheet" href="style.css" />
        ${pages[page](data)}
  `;
  return next();
};
