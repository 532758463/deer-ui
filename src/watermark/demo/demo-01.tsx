import React from "react";
import { Button } from "antd";
import { Watermark } from "@tonice/deer-ui";

export default () => {
  return (
    <div style={{ width: "100%", height: 500, position: "relative" }}>
      <Button type="primary">确认</Button>
      <Watermark text="测试水印" />
    </div>
  );
};
