import { minify } from "terser";

export const makeScript = async (func, attr = {}) => {
  const iife = `(${func.toString()})()`;
  const result = await minify(iife);
  return `<script>${result.code}</script>`;
};
