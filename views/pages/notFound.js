import nav from "../components/nav.js";

export const notFound = ({ title }) => {
  return /*html*/ `<title>CanvaSplash | ${title}</title>
    </head>
    <body>
      ${nav({ title })}
      <h1 class="not-found">${title}: 404</h1>
    </body>
    </html>
  `;
};
