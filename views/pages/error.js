import nav from "../components/nav.js";

export const error = ({ title, nonce }) => {
  return /*html*/ `<title>CanvaSplash | ${title}</title>
    <style nonce="${nonce}">${style}</style>
    </head>
    <body>
    ${nav({ title })}
      <div class="body">
        <h2>Error</h2>
        <p>
          Error fetching products. Try Again Later.
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
