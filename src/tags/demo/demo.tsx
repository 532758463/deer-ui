import React, { FunctionComponent } from "react";
import { TagsBox } from "@tonice/deer-ui";
import "../style/index.less";

const condition = {
  标签: {
    deerui: 35,
    antdesign: 5,
    good: 36,
    bootstrap: 35,
  },
  扩展名: {
    word: 35,
    pdf: 35,
    ppt: 35,
    excel: 35,
  },
  用户: {
    张三: 35,
    王五: 35,
    李宁: 35,
  },
  手机品牌: {
    华为: 35,
    小米: 35,
    vivo: 35,
  },
};
const Demo: FunctionComponent = () => {
  return (
    <section>
      <TagsBox data={condition} initialCategory="tags" />
    </section>
  );
};

export default Demo;
