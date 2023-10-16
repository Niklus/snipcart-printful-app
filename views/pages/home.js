import { makeScript } from "../utils/makeScript.js";
import nav from "../components/nav.js";

export const home = ({ title, products }) => {
  return /*html*/ `
    <title>${title}</title>
    </head>
    <body>
      ${nav({ title })}
        <div class="body">
          <div class="container">
            ${products
              .map(
                (product) => /*html*/ `
                <div class="card">
                  <div class="card-content">
                    <div class="top-bar">
                      <span>$ 30.00</span>
                    </div>
                    <div class="img">
                      <img
                      src="${product.thumbnail_url}"
                      alt="${product.name}"
                      />
                    </div>
                  </div>
                  <div class="card-description">
                    <div class="title">${product.name}</div>
                    <div class="cart">
                      <span class="lnr lnr-cart snipcart-add-item"
                      data-item-id="${product.id}"
                      data-item-price="30.00"
                      data-item-description="${product.name}"
                      data-item-image="${product.thumbnail_url}"
                      data-item-name="${product.name}">
                        <img src="cart.svg" />
                      </span>
                    </div>
                  </div>
                  <div class="card-footer">
                    <!--<div class="span">Sold Out</div>-->
                    <div class="span">Sale!</div>
                  </div>
                </div>`
              )
              .join("")}
          </div>
        </div>
      ${script}
      <script src="/snipcart.min.js"></script>
    </body>
    </html>
  `;
};

const script = await makeScript(() => {
  window.SnipcartSettings = {
    publicApiKey:
      "YTk5NWQ3MzYtNjI5MS00MDAxLWIzOGQtN2QyMGVhM2U4ODY0NjM4MzMwMzEwMTUzMDU4ODEw",
    loadStrategy: "on-user-interaction",
  };
});

const style = /* css */ `
  
`;
