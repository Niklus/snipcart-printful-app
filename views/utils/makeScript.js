import { minify } from "../../deps.js";

export const makeScript = async (func) => {
  const iife = `(${func.toString()})()`;
  const result = await minify(iife);
  return result.code;
};
