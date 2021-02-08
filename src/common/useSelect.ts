import { useLocalStore, useAsObservableSource } from "mobx-react-lite";
import { reaction } from "mobx";
import { IDataListConfig, IDataSource } from "./types";
import { useEffect } from "react";

/**
 * 文件列表选中操作
 */
export function useSelect<T>({ items = [], itemKey }: IDataListConfig<T>) {
  const dataSourceConfig = useAsObservableSource({ items });

  const dataSource: IDataSource<T> = useLocalStore(() => {
    return {
      items: [] as T[],
      // 选中的item集合
      selectedKeys: new Set(),
      //列表每一项的唯一key值
      itemKey,
      // 选中的item数组集合
      get selections(): T[] {
        return this.items.filter((item) => this.isSelected(item));
      },
      //获取可选择的id值
      get selectableKeys() {
        return new Set<string>(this.items.map((item) => this.itemKey(item)));
      },
      // 获取是否全部选中的状态
      get allSelected() {
        return (
          !!this.items.length && this.selectedKeys.size === this.items.length
        );
      },
      // 判断该项是否被选中
      isSelected(item: T) {
        return this.selectedKeys.has(this.itemKey(item));
      },
      // 只选中当前项
      selectOnly(item: T) {
        this.unselectAll();
        this.selectedKeys.add(this.itemKey(item));
      },
      selectAll() {},
      unselectAll() {
        if (this.selectedKeys.size) {
          this.selectedKeys = new Set();
        }
      },
      toggleSelectAll() {
        this.allSelected ? this.unselectAll() : this.selectAll();
      },
      // 选中当前项
      select(item: T) {
        this.selectedKeys.add(this.itemKey(item));
      },
      // 取消选中当前项
      unselect(item: T) {
        this.selectedKeys.delete(this.itemKey(item));
      },
      toggleSelect(item: T) {
        this.selectedKeys.has(this.itemKey(item))
          ? this.unselect(item)
          : this.select(item);
      },
      //点击列表每一项
      onInvoke(e, item: T) {
        if (e.ctrlKey) {
          this.toggleSelect(item);
        } else if (this.isSelected(item)) {
          this.unselectAll();
          // this.unselect(item);
        } else {
          this?.selectOnly(item);
        }
      },
      // 每一项右键点击：如果不包含该项，右键只选中当前项
      onContextMenu(item: T) {
        if (!this.selectedKeys.has(this.itemKey(item))) {
          this.selectOnly(item);
        }
      },
      // 点击选中，如果已选中，取消当前选中状态
      onSelect(item: T) {
        if (this.isSelected(item)) {
          this.unselect(item);
        } else {
          this.select(item);
        }
      },
    };
  });
  useEffect(
    () =>
      reaction(
        () => dataSourceConfig.items,
        () => {
          dataSource.items = dataSourceConfig.items;
        },
        {
          fireImmediately: true,
        }
      ),
    []
  );

  return dataSource;
}
