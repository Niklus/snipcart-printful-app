import nav from "../components/nav.js";

export const notFound = ({ title }) => {
  return /*html*/ `<title>CanvaSplash | ${title}</title>
    </head>
    <body>
      ${nav}
      <main>
        <h1>${title}: 404</h1>
      </main>
    </body>
    </html>
  `;
};
