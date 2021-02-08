export interface IDataSelectItemComponentProps<T> {
  selected: boolean;
  item: T;
}

export interface IDataListConfig<T> {
  items: T[];
  itemKey(item: T): string;
}

export interface IDataSource<T> {
  items: T[];
  selectedKeys: Set<unknown>;
  itemKey: (item: T) => string;
  readonly selections: T[];
  readonly selectableKeys: Set<string>;
  readonly allSelected: boolean;
  isSelected(item: T): boolean;
  selectOnly(item: T): void;
  selectAll(): void;
  unselectAll(): void;
  toggleSelectAll(): void;
  select(item: T): void;
  unselect(item: T): void;
  toggleSelect(item: T): void;
  onInvoke(e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: T): void;
  onSelect(item: T): void;
  onContextMenu(item: T): void;
}
