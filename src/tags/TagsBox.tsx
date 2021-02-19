import React, { FunctionComponent } from "react";
import { useLocalStore } from "mobx-react-lite";
import { Tags } from "./Tags";

import { useMeasure } from "react-use";

interface Keys {
  [key: string]: number;
}

interface IData {
  [key: string]: object;
}

interface ITagsBoxProps {
  data: IData;
  initialCategory: string;
}

export const TagsBox: FunctionComponent<ITagsBoxProps> = ({
  data,
  initialCategory = "",
}) => {
  const [refExpandPanel, { width }] = useMeasure();
  const store = useLocalStore(() => {
    return {
      category: initialCategory,
      onCategoryChange(category: string) {
        store.category = category;
      },
    };
  });
  return (
    <section ref={refExpandPanel}>
      {Object.keys(data).map((value) =>
        Object.keys(data[value] as Keys)?.length > 0 ? (
          <Tags
            title={value}
            data={data[value] as any}
            category={store.category}
            onCategoryChange={store.onCategoryChange}
            boxWidth={width}
          />
        ) : null
      )}
    </section>
  );
};

export default TagsBox;
