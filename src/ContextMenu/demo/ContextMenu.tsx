import React, { FunctionComponent, useContext } from "react";
import { Menu } from "antd";
import { ContextMenuContext } from "./ContextMenuProvider";
import classnames from "classnames";

interface IContextMenuProps {
  selectedKeys: Set<unknown>;
}

export const ContextMenu: FunctionComponent<IContextMenuProps> = ({
  selectedKeys,
}) => {
  const dataContextMenu = useContext(ContextMenuContext);

  const menuClick = () => {
    dataContextMenu.onVisibleChange(false);
  };

  const favorite = () => {};

  return (
    <>
      {!(selectedKeys.size > 1) ? (
        <Menu
          className={classnames("as-search-contextmenu")}
          onClick={menuClick}
        >
          <Menu.Item hidden={selectedKeys.size > 1} onClick={favorite}>
            移动
          </Menu.Item>
          <Menu.Item>删除</Menu.Item>
        </Menu>
      ) : null}
    </>
  );
};
