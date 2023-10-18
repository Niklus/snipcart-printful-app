import Router from "@koa/router";

export const hookRouter = new Router({
  prefix: "/webhook",
});

hookRouter.post("/", async (ctx) => {
  if (ctx.request.body.eventName === "order.completed") {
    const customer_name = ctx.request.body.content.cardHolderName;
    const customer_phone = ctx.request.body.content.billingAddressPhone;
    const order_number = ctx.request.body.content.invoiceNumber;

    const items = ctx.request.body.content.items.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        id: item.uniqueId,
      };
    });

    const order = {
      customerName: customer_name,
      customerPhone: customer_phone,
      orderNumber: order_number,
    };

    console.log("items: ", items); // send to printful
    console.log("order: ", order); // store in database as orders with orderNumber as key
  }

  ctx.status = 204;
});
