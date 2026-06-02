function quote(file) {
  return JSON.stringify(file);
}

function buildPrettierCommand(files) {
  if (files.length === 0) {
    return [];
  }

  return [`bunx prettier --write ${files.map(quote).join(" ")}`];
}

export default {
  "*.{js,jsx,ts,tsx,mjs,cjs,mts,cts,md,mdx,json,css,scss,yml,yaml}":
    buildPrettierCommand,
};
