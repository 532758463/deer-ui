// 测量文本的宽度
export function textMeasure(text: string, font = "13.3333px Microsoft YaHei") {
  const Context2d = document
    .createElement("canvas")
    .getContext("2d") as CanvasRenderingContext2D;

  Context2d.font = font;
  return Context2d.measureText(text).width;
}
