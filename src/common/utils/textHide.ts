import { textMeasure } from "./textMeasure";

// 获得中间省略的字符串
export function textHide(
  text: string,
  width: number,
  font = "13.3333px Microsoft YaHei"
) {
  const fontBoxWidth = textMeasure(text, font);

  if (width > fontBoxWidth) {
    return text;
  } else {
    // 每个字体的宽度
    const fontWidth = parseInt(`${fontBoxWidth / text.length}`);

    // 需要截取的个数
    const sliceTotal = parseInt(`${(fontBoxWidth - width) / fontWidth}`);

    // 中间位置
    const middle = parseInt(`${text.length / 2 - sliceTotal / 2}`);

    // 下一个开始位置
    const nextStart = parseInt(`${text.length / 2 + sliceTotal / 2}`);
    const nextText = `${text.slice(0, middle)}...${text.slice(
      nextStart,
      text.length
    )}`;

    return nextText;
  }
}
