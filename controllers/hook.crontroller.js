import * as printful from "../services/printful.service.js";

const orderCompleted = async (ctx) => {
  try {
    const { content } = ctx.request.body;

    const {
      invoiceNumber,
      email,
      shippingAddress,
      items,
      shippingRateUserDefinedId,
    } = content;

    const recipient = {
      ...(shippingAddress.name && { name: shippingAddress.name }),
      ...(shippingAddress.address1 && { address1: shippingAddress.address1 }),
      ...(shippingAddress.address2 && { address2: shippingAddress.address2 }),
      ...(shippingAddress.city && { city: shippingAddress.city }),
      ...(shippingAddress.country && { country_code: shippingAddress.country }),
      ...(shippingAddress.province && {
        state_code: shippingAddress.province,
      }),
      ...(shippingAddress.postalCode && { zip: shippingAddress.postalCode }),
      ...(shippingAddress.phone && { phone: shippingAddress.phone }),
      email,
    };

    const printfulItems = items.map((item) => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    }));

    const body = {
      external_id: invoiceNumber,
      recipient,
      items: printfulItems,
      shipping: shippingRateUserDefinedId,
    };

    console.log(body);

    // Placeholder response
    ctx.response.status = 200;
    ctx.response.body = body;

    /* Create order in Printful
    const data = await printful.createOrder(body);

    const { code } = data;

    if (code === 200) {
      ctx.response.status = 200;
    }*/
  } catch (error) {
    console.error(error);
    ctx.response.status = 500;
    // TODO: If we get a 500 error
    // We should issue a notification to the user and use snipcart's API to cancel the order
    // Or we can issue a refund
  }
};

const events = {
  "order.completed": orderCompleted,
  "customauth:customer_updated": async (ctx) => {
    console.log("customer updated");
  },
};

const eventHandler = (ctx) => {
  if (ctx.request.method !== "POST") return (ctx.response.status = 405);
  try {
    const { content, eventName } = ctx.request.body;
    if (!content || !eventName) {
      ctx.response.status = 400;
      return;
    }
    if (events[eventName]) return events[eventName](ctx);
    ctx.throw(404, "No route handler for this event");
  } catch (error) {
    console.error("Oops, something went wrong!", error);
    ctx.response.status = 500;
  }
};

export default eventHandler;
