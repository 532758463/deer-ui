import React from "react";
import { Watermark } from "@tonice/deer-ui";

export default () => {
  return (
    <div style={{ position: "relative", width: "100%", height: 500 }}>
      <Watermark text={["deer", "2020-08-08 12:00:00"]} />
    </div>
  );
};
