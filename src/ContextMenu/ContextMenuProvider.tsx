import React, { FunctionComponent, createContext } from "react";
import { useObserver } from "mobx-react-lite";
import { useContextMenu } from "./useContextMenu";
import { Dropdown } from "antd";

type OverlayFunc = () => React.ReactElement;

interface ContextProps {
  overlay: React.ReactElement | OverlayFunc;
}

export const ContextMenuContext = createContext<any>(null);

/**
 * 右键菜单
 */
export const ContextMenuProvider: FunctionComponent<ContextProps> = ({
  children,
  overlay,
}) => {
  const dataContextMenu = useContextMenu();

  return useObserver(() => (
    <ContextMenuContext.Provider value={dataContextMenu}>
      <Dropdown
        visible={dataContextMenu.visible}
        overlay={overlay}
        trigger={["contextMenu"]}
        onVisibleChange={dataContextMenu?.onVisibleChange}
      >
        <div
          style={{ pointerEvents: dataContextMenu.visible ? "none" : "all" }}
        >
          {children}
        </div>
      </Dropdown>
    </ContextMenuContext.Provider>
  ));
};
