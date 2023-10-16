import nav from "../components/nav.js";

export const notFound = ({ title }) => {
  return /*html*/ `<title>${title}</title>
    </head>
    <body>
      ${nav({ title })}
      <main>
        <h1>${title}: 404</h1>
      </main>
    </body>
    </html>
  `;
};
