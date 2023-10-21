import * as printful from "../services/printful.service.js";

export const homePage = async (ctx) => {
  if (ctx.state.products) {
    return (ctx.body = ctx.render("home", {
      title: "Home",
      products: ctx.state.products,
    }));
  }

  try {
    let products = await ctx.kv.get(["products"]);

    if (products && products.value) {
      products = products.value;
      console.log("Products from Database");
    } else {
      const { result } = await printful.getPrintfulProducts();
      products = result?.length ? result : [];

      const res = await ctx.kv
        .atomic()
        .set(["products"], products, {
          expireIn: 60 * 60 * 24 * 2 * 1000, // 2 days
        })
        .commit();

      if (!res.ok) {
        throw new Error("Error updating products");
      }
      console.log("Products from Printful");
    }
    ctx.state.products = products;
    ctx.body = ctx.render("home", { title: "Home", products });
  } catch (error) {
    console.log(error);
    ctx.body = ctx.render("error", { title: "Error", error });
  }
};

/*reset database
export const resetDb = async (ctx) => {
  try {
    const res = await ctx.kv.atomic().delete(["products"]).commit();

    if (!res.ok) {
      throw new Error("Error resetting database");
    }

    ctx.redirect("/");
  } catch (error) {
    console.log(error);
    ctx.body = ctx.render("error", { title: "Error", error });
  }
};
*/
