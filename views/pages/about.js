import nav from "../components/nav.js";

export const about = ({ title, nonce }) => {
  return /*html*/ `<title>CanvaSplash | ${title}</title>
    <style nonce="${nonce}">${style}</style>
    </head>
    <body>
      ${nav}
      <div class="body">
        <h2>About</h2>
        <p>
        🎨 Welcome to CanvaSplash! 🌟 Unleash your imagination and immerse yourself in a world of vibrant creativity. We're your destination for unique art designs that fuse captivating colors with boundless imagination. From whimsical wonders to abstract awe, each piece is a symphony of hues and ideas waiting to adorn your life. Step into CanvaSplash and let art transform the ordinary into the extraordinary.
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
