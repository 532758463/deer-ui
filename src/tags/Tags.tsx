import React, { FunctionComponent, useEffect } from "react";
import { Tag as AntTag, Button } from "antd";
import { useSelect } from "../common";
import { useLocalStore, useObserver } from "mobx-react-lite";
import classnames from "classnames";
import { DownOutlined } from "@ant-design/icons";
import { useMeasure } from "react-use";

interface ITagProps {
  title: string;
  data?: any;
  className?: string;
  category: string;
  onCategoryChange(val: string): void;
  boxWidth: number;
  // condition: Record<string, string[]>;
  isReset?: boolean;
}

export const Tags: FunctionComponent<ITagProps> = ({
  data,
  className,
  title,
  category,
  onCategoryChange,
  boxWidth = 800,
  // condition,
  isReset = false,
}) => {
  const tags = Array.isArray(data) ? data : Object.keys(data);

  const dataSelect = useSelect({ items: tags, itemKey: (item) => item });
  const [refTagBox, { width }] = useMeasure();

  const store = useLocalStore(() => {
    return {
      multiple: false,
      expanded: false,

      // 记录多选
      selections: new Set(),
      batchSelect: () => {
        store.selections = new Set([...dataSelect.selectedKeys]);
        store.multiple = true;
        store.expanded = true;
        onCategoryChange(title);
      },
      onOk: () => {
        store.multiple = false;
        store.expanded = false;
        // condition[title] = [...dataSelect.selectedKeys] as string[];
        // onConditionSearch(condition);
      },
      onCancel: () => {
        dataSelect.selectedKeys = new Set([...store.selections]);
        store.multiple = false;
        store.expanded = false;
      },
      onChangeExpand: () => {
        store.expanded = !store.expanded;
      },
      onClickTag(value: string) {
        dataSelect.onSelect(value);
        if (!this.multiple) {
          // condition[title] = [...dataSelect.selectedKeys] as string[];
          // onConditionSearch(condition);
        }
      },
      reset() {
        store.selections = new Set();
        // condition[title] = [] as string[];
        dataSelect.unselectAll();
      },
    };
  });

  useEffect(() => {
    if (category !== title) {
      store.multiple = false;
    }
  }, [category]);

  useEffect(() => {
    if (isReset) {
      store.reset();
    }
  }, [isReset]);

  return useObserver(() => {
    return (
      <section
        className={classnames(
          "deer-ui-category-item",
          { "tags-multiple": store.multiple },
          className
        )}
      >
        <div className="title">
          <span className="separator" style={{ background: "#4569d4" }}></span>
          <span>{title}</span>
        </div>
        <section
          ref={refTagBox}
          className={classnames("tag-box", { expand: store.expanded })}
        >
          {tags.map((value) => (
            <AntTag
              className={classnames("tag", {
                selected: dataSelect.isSelected(value),
              })}
              onClick={() => store.onClickTag(value)}
            >
              <span>{value}</span>
              <span className="count">{data[value]}</span>
            </AntTag>
          ))}

          {store.expanded && store.multiple && (
            <div className="multiple-btn">
              <Button
                style={{
                  marginRight: "8px",
                }}
                type="primary"
                onClick={store.onOk}
              >
                确定
              </Button>
              <Button onClick={store.onCancel} type="default">
                取消
              </Button>
            </div>
          )}
        </section>
        {!store.multiple && (
          <div className="operation">
            {width > boxWidth - 160 - 110 && (
              <div className="more" onClick={store.onChangeExpand}>
                <span>更多</span>
                <DownOutlined
                  className={classnames("icon-down", {
                    revert: store.expanded,
                  })}
                />
              </div>
            )}

            {tags.length > 1 && <div onClick={store.batchSelect}>+ 多选</div>}
          </div>
        )}
      </section>
    );
  });
};
