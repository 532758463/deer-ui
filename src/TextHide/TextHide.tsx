import React, { FunctionComponent } from "react";
import { textHide } from "@tonice/deer-ui";

interface ITextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  width: number;
  text: string;
  style?: React.HTMLAttributes<HTMLDivElement>;
}

export const TextHide: FunctionComponent<ITextProps> = ({
  width,
  text,
  style,
  ...restProps
}) => {
  return (
    <div
      style={{
        width,
        border: "1px solid #f0f0f0",
        padding: "8px",
        whiteSpace: "nowrap",
        ...style,
      }}
      {...restProps}
    >
      {textHide(text, width)}
    </div>
  );
};
