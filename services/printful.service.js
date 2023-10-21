import { axios } from "../deps.js";
import { load } from "../deps.js";

await load({ export: true });

const printfulRequest = ({ method, url, body = {} }) => {
  return axios({
    method,
    url,
    baseURL: "https://api.printful.com",
    headers: {
      Authorization: `Bearer ${Deno.env.get("PRINTFUL_API_TOKEN")}`,
    },
    body: JSON.stringify(body),
  });
};

const getPrintfulProducts = async () => {
  try {
    const { data } = await printfulRequest({
      method: "GET",
      url: "/store/products",
    });
    return data;
  } catch (error) {
    throw error;
  }
};

const createOrder = async (body) => {
  try {
    const { data } = await printfulRequest({
      method: "POST",
      url: "/orders",
      body,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

// TODO: Implement this
/*const getPrintfulShippingRates = async (body) => {
  try {
    const { data } = await printfulRequest({
      method: "POST",
      url: "/shipping/rates",
      body,
    });
    return data;
  } catch (error) {
    throw error;
  }
};*/

export { getPrintfulProducts, createOrder };
