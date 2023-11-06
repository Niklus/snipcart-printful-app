const nav = ({ title }) => /*html*/ `<div class="header">
    <div class="title">
      <a href="/">
        <img src="https://cdn.jsdelivr.net/gh/otizi/assets@main/logo.png" height="120px"/>
      </a>
    </div>
    <div class="nav">
      <a href="/">HOME</a> |
      <a href="/about">ABOUT</a>${
        title === "Home"
          ? ' | <a href="#" class="snipcart-checkout"><img height="20px" src="https://cdn.jsdelivr.net/gh/otizi/assets@main/cart.svg" /></a>'
          : ""
      }
    </div>
  </div>
`;

export default nav;
