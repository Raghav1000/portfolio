import { ReactNode } from "react";

export interface INavMenuItems {
    title: string;
    url: string;
}

export type Size = "sm" | "md" | "lg";

export type IButtonType = 'text' | 'primary'

export interface IButton {
    label: string;
    icon: ReactNode;
    size: Size;
    onClick: () => void;
    type: IButtonType
}
