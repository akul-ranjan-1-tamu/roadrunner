import { Layout } from "react-grid-layout";
import { WIDGET_TYPE } from "./widgetManifest";

export interface WidgetProps {
    id: string;
};

export type ResizeHandle = "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";
export const RESIZE_HANDLES: ResizeHandle[] = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

export interface Widget extends Layout {
    component: React.ReactNode;
    availableHandles: ResizeHandle[];
}


export interface WidgetPreset {
    //title which shows up in menu
    title: string;
    //defines widget contents
    type: WIDGET_TYPE;
    //appear when resizing widget
    availableHandles: ResizeHandle[];
    //starting dimensions
    h: number;
    w: number;
    //max dimensions
    maxH?: number;
    maxW?: number;
}