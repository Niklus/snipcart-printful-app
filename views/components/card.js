const card = ({ product }) => {
  return /*html*/ `<div class="card">
    <a class="card-content" href=${product.thumbnail_url} 
      data-pswp-width="800"
      data-pswp-height="800">
      <div class="top-bar">
        <span>$ 30.00</span>
      </div>
      <div class="img">
        <img
        src="${product.thumbnail_url}"
        alt="${product.name}"
        />
      </div>
    </a>
    <div class="card-description">
      <div class="title">${product.name}</div>
      <div class="cart" >
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
  </div>`;
};

export default card;
