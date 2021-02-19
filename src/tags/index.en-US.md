---
nav:
  title: 组件
  path: /components
group:
  title: 标签
  path: /tags
---

# Tags

功能场景：单击、多选标签操作。

引入

```
// 不同类标签盒子
import { TagsBox } from "@tonice/deer-ui";

// 同类标签组合
import { Tags } from "@tonice/deer-ui";
```

## 代码演示

<code src="./demo/demo.tsx"/>

## API

### TagsBox

| 参数            | 说明     | 类型   | 是否必须 | 默认值 | 备选值 |
| --------------- | -------- | ------ | -------- | ------ | ------ |
| data            | 标签数据 | Object | 是       | --     | --     |
| initialCategory | 默认类别 | string | 否       | ""     | --     |

### Tags

| 参数             | 说明     | 类型              | 是否必须 | 默认值  | 备选值 |
| ---------------- | -------- | ----------------- | -------- | ------- | ------ |
| data             | 标签数据 | Object/Array<any> | 是       | --      | --     |
| boxWidth         | 盒子宽度 | number            | 是       | ""      | --     |
| category         | 默认类别 | string            | 否       | ""      | --     |
| title            | 类别名称 | string            | 否       | ""      | --     |
| className        | 类名     | string            | 否       | ""      | --     |
| onCategoryChange | 切换类别 | Function          | 否       | ""      | --     |
| isReset          | 重置     | boolean           | 否       | `false` | --     |
