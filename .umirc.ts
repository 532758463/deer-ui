export default {
  mode: "site",
  title: "deer-ui",
  favicon:
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
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
