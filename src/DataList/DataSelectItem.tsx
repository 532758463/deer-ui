import React, { FunctionComponent, createElement, ComponentType } from "react";
import { useObserver } from "mobx-react-lite";
import { List } from "antd";
import classnames from "classnames";
import { IDataSelectItemComponentProps } from "../common/hooks/types";

interface IDataSelectItemProps<T> {
  itemRenderer: ComponentType<IDataSelectItemComponentProps<T>>;
  className?: string;
  item: any;
  onInvoke?(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: any): void;
  onContextMenu(item: T): void;
  isSelected: boolean;
}

export const DataSelectItem: FunctionComponent<IDataSelectItemProps<any>> = ({
  itemRenderer,
  className,
  item,
  onInvoke,
  isSelected = false,
  onContextMenu,
}) => {
  const itemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (typeof onInvoke === "function") {
      onInvoke(e, item);
    }
  };

  return useObserver(() => (
    <List.Item
      onClick={itemClick}
      onContextMenu={() => onContextMenu(item)}
      className={classnames(
        "deer-ui-data-select-item",
        { select: isSelected },
        className
      )}
    >
      {createElement(itemRenderer, { selected: isSelected, item })}
    </List.Item>
  ));
};
