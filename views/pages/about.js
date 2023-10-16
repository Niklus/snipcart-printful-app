import nav from "../components/nav.js";

export const about = ({ title }) => {
  return /*html*/ `<title>${title}</title>
    </head>
    <body>
      ${nav({ title })}
      <main>
        <h1>${title} Page</h1>
      </main>
    </body>
    </html>
  `;
};
