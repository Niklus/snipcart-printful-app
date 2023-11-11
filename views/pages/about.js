import nav from "../components/nav.js";

export const about = ({ title, nonce }) => {
  return /*html*/ `<title>CanvaSplash | ${title}</title>
    <style nonce="${nonce}">${style}</style>
    </head>
    <body>
      ${nav({ title })}
      <div class="body">
        <h2>About</h2>
        <p>
          CanvaSplash is a demo ecommerce store that sells prints of images on poster flags.
          It uses snipcart to handle the ecommerce on the frontend and Printful to handle the printing and shipping.
          The products are fetched from your printful account and displayed on the site.
          When a customer places an order, the order is sent to Printful and the order is fulfilled.
        </p>
      </div>
    </body>
    </html>
  `;
};

const style = /* css */ `
  .body {
    margin-right: auto;
    margin-left: auto;
    max-width: 750px;
    line-height: 1.8;
  }
`;
