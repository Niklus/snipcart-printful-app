import { makeScript } from "../utils/makeScript.js";
import nav from "../components/nav.js";
import card from "../components/card.js";

export const home = ({ title, products }) => {
  return /*html*/ `
    <title>CanvaSplash | ${title}</title>
    </head>
    <body>
      ${nav}
        <div class="body">
          <div class="container" id="my-gallery">
            ${products.map((product) => `${card({ product })}`).join("")}
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

  const lightbox = new PhotoSwipeLightbox({
    gallery: "#my-gallery",
    children: ".card-content",
    pswpModule: PhotoSwipe,
  });

  lightbox.init();
});

const style = /* css */ ``;
