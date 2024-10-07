import { Layout } from "react-grid-layout";
import { WIDGET_TYPE } from "./widgetManifest";

export interface WidgetProps {
    id: string;
};

export interface Widget extends Layout {
    component: React.ReactNode;

}

export type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";
export const RESIZE_HANDLES: ResizeHandle[] = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];