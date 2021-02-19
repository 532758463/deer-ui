export default {
  mode: "site",
  title: "deer-ui",
  favicon:
    "https://raw.githubusercontent.com/532758463/deer-ui/bd730a198d4acc4c5a76cb788b54655a2907b6d3/static/logo.svg",
  logo:
    "https://raw.githubusercontent.com/532758463/deer-ui/bd730a198d4acc4c5a76cb788b54655a2907b6d3/static/logo.svg",
  navs: {
    "zh-CN": [
      null,
      { title: "GitHub", path: "https://github.com/532758463/deer-ui" },
    ],
    "en-US": [
      null,
      { title: "GitHub", path: "https://github.com/532758463/deer-ui" },
    ],
  },
  dynamicImport: {},
  locale: {
    default: "zh-CN",
    antd: true,
    baseNavigator: true,
  },
  hash: true,
  base: "/deer-ui/",
  publicPath: "/deer-ui/",
  styles: [`body { color: red; }`],
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  ],
};
