import React, { FunctionComponent, useContext } from "react";
import { Menu, message } from "antd";
import { ContextMenuContext } from "../ContextMenuProvider";
import classnames from "classnames";
import { IDataSource } from "deer-ui/es/common/types";
interface IContextMenuProps {
  dataSource: IDataSource<any>;
}

export const ContextMenu: FunctionComponent<IContextMenuProps> = ({
  dataSource,
}) => {
  const dataContextMenu = useContext(ContextMenuContext);

  const menuClick = () => {
    dataContextMenu.onVisibleChange(false);
  };

  const favorite = () => {
    message.success("收藏成功");
  };

  return (
    <>
      <Menu className={classnames("contextmenu")} onClick={menuClick}>
        <Menu.Item hidden={dataSource.selectedKeys.size > 1}>移动</Menu.Item>
        <Menu.Item>删除</Menu.Item>
        {dataSource.selectedKeys.size === 1 && (
          <Menu.Item onClick={favorite}>收藏</Menu.Item>
        )}
      </Menu>
    </>
  );
};
