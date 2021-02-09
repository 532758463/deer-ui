import React, { forwardRef } from "react";
import AntButton, { ButtonProps, ButtonType } from "antd/lib/button";

export interface IButtonProps extends Omit<ButtonProps, "type"> {
  /**
   * Button 类型
   */
  type?:
    | "default"
    | "primary"
    | "ghost"
    | "dashed"
    | "link"
    | "normal"
    | ""
    | undefined;
  /**
   * oem Button 样式
   */
  oemClassName?: string;
}

/**
 *按钮用于开始一个即时操作。
 *
 * ```js
 *  import { Button } from "@dawn/deer-ui"
 * ```
 */
export const Button = forwardRef<HTMLElement, IButtonProps>((props, ref) => {
  const {
    type = "",
    className = "",
    oemClassName = "deer-oem-background-color",
    ...others
  } = props;
  switch (type) {
    case "primary":
      return (
        <AntButton
          type="primary"
          className={`${oemClassName} ${className}`}
          ref={ref}
          {...others}
        />
      );
    case "normal":
      return (
        <AntButton
          type="default"
          className={`deer-normal-button ${className}`}
          ref={ref}
          {...others}
        />
      );
    default:
      return type ? (
        <AntButton
          type={type as ButtonType}
          className={className}
          ref={ref}
          {...others}
        />
      ) : (
        <AntButton className={className} ref={ref} {...others} />
      );
  }
});
