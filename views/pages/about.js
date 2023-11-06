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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
