import React, { FunctionComponent } from "react";
import { Avatar } from "antd";
import { DataList } from "../DataList";
import { useSelect } from "../../common";

import head from "./img/head.jpg";
const data = [];

for (let i = 0; i < 20; i++) {
  data.push({
    key: `gns//${i}`,
    title: `deer-ui Title ${i}`,
  });
}

const DataListDemo: FunctionComponent = () => {
  const dataList = useSelect({ items: data, itemKey: (item) => item?.key });
  return (
    <DataList data={data} dataSource={dataList}>
      {({ item }) => (
        <>
          <Avatar src={head} />
          <span>{item.title}</span>
        </>
      )}
    </DataList>
  );
};

export default DataListDemo;
