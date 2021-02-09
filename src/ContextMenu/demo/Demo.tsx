import React, { FunctionComponent } from "react";
import { ContextMenu } from "./ContextMenu";
import { ContextMenuProvider } from "../ContextMenuProvider";
import { DataList } from "@dawn/deer-ui";
import { useSelect } from "@dawn/deer-ui/es/common";
import { Avatar } from "antd";
import head from "./img/head.jpg";
import "./demo.less";

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: `gns//${i}`,
    title: `deer-ui title ${i}`,
  });
}

const Demo: FunctionComponent = () => {
  const dataList = useSelect({ items: data, itemKey: (item) => item?.key });
  return (
    <ContextMenuProvider overlay={<ContextMenu dataSource={dataList} />}>
      <DataList data={data} dataSource={dataList}>
        {({ item }) => (
          <>
            <Avatar src={head} />
            <span style={{ marginLeft: "20px" }}>{item.title}</span>
          </>
        )}
      </DataList>
    </ContextMenuProvider>
  );
};

export default Demo;
