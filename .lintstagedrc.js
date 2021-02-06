module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
  "{*.json,.{babelrc,eslintrc,prettierrc,stylelintrc,huskyrc}}": (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
  "*.{css,less}": (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
  "*.{yml,md,mdx}": (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
};
