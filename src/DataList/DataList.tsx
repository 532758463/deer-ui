import React, { FunctionComponent, ComponentType } from "react";
import { useObserver } from "mobx-react-lite";
import { List } from "antd";
import classnames from "classnames";
import { DataSelectItem } from "./DataSelectItem";
import {
  IDataSelectItemComponentProps,
  IDataSource,
} from "../common/hooks/types";

interface IDataListProps<T> {
  children: ComponentType<IDataSelectItemComponentProps<T>>;
  className?: string;
  itemClassName?: string;
  data: T[];
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onChangeSelections?: (selections: T[]) => void;
  dataContextMenu?: any;
  dataSource: IDataSource<T>;
}

export const DataList: FunctionComponent<IDataListProps<any>> = ({
  children,
  className,
  data,
  itemClassName,
  dataSource,
}) => {
  return useObserver(() => (
    <div className="deer-ui-datalist">
      {data?.length > 0 ? (
        <List className={classnames(className)}>
          {data.map((item) => (
            <DataSelectItem
              itemRenderer={children}
              item={item}
              className={itemClassName}
              onInvoke={dataSource.onInvoke}
              isSelected={dataSource.isSelected(item)}
              onContextMenu={dataSource.onContextMenu}
            />
          ))}
        </List>
      ) : null}
    </div>
  ));
};
