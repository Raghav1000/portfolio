import { MouseEvent, ReactNode } from "react";

export interface INavMenuItems {
  title: string;
  url: string;
}

export type Size = "sm" | "md" | "lg";

export type IButtonType = "text" | "primary" | "default";

export interface IButton {
  label: ReactNode;
  icon: ReactNode;
  size: Size;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  type: IButtonType;
  className: string;
  htmlType: "button" | "submit" | "reset";
  disabled: boolean;
  ariaLabel: string;
}
